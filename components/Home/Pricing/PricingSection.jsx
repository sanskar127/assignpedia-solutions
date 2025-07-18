import { useEffect, useState } from 'react';
import PricingBox from './PricingBox';
import OfferList from './OfferList';
import SectionTitle from 'components/common/SectionTitle';
import Modal from './Modal';

function cleanFeatureText(text) {
  return text
    .replace(/^no\s+/i, '')
    .replace(/^not\s+/i, '')
    .replace(/^without\s+/i, '')
    .replace(/^false\s+/i, '')
    .trim();
}

function extractPricingPlansFromHtml(htmlString) {
  const blocks = htmlString.split('<hr');
  const plans = [];

  blocks.forEach((blockHtml) => {
    const temp = document.createElement('div');
    temp.innerHTML = blockHtml;

    const strong = temp.querySelector('strong');
    const pTags = temp.querySelectorAll('p');
    const ul = temp.querySelector('ul');

    if (!strong) return;

    const title = strong.textContent.trim();
    const text = temp.innerText;

    const monthlyMatch = text.match(/Monthly:\s*\$?(\d+)\s*\|\s*\$?(\d+)/i);
    const yearlyMatch = text.match(/Yearly:\s*\$?(\d+)\s*\|\s*\$?(\d+)/i);

    const subtitleMatch = text.match(/Yearly:\s*\$\d+\s*\|\s*\$\d+\s*(.+)$/im);

    const plan = {
      planName: title,
      priceMonthly: monthlyMatch ? monthlyMatch[1] : '',
      priceMonthlyOld: monthlyMatch ? monthlyMatch[2] : '',
      priceYearly: yearlyMatch ? yearlyMatch[1] : '',
      priceYearlyOld: yearlyMatch ? yearlyMatch[2] : '',
      description: subtitleMatch ? subtitleMatch[1].trim() : '',
      features: [],
    };

    if (ul) {
      plan.features = Array.from(ul.querySelectorAll('li')).map((li) => {
        const text = li.textContent.trim();
        const isActive = !/no|not|without|false/i.test(text);
        return { featureText: cleanFeatureText(text), isActive };
      });
    } else {
      plan.features = Array.from(pTags)
        .slice(1)
        .map((p) => {
          const text = p.textContent.trim();
          const isActive = !/no|not|without|false/i.test(text);
          return { featureText: cleanFeatureText(text), isActive };
        });
    }

    plans.push(plan);
  });

  return plans;
}

export default function PricingSection({ htmlContent = '', showTitle = true }) {
  const [isMonthly, setIsMonthly] = useState(true);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalPlanName, setModalPlanName] = useState('');

  useEffect(() => {
    if (htmlContent) {
      const extracted = extractPricingPlansFromHtml(htmlContent);
      setPricingPlans(extracted);
    }
  }, [htmlContent]);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center text-primary pb-5">Pricing Package</div>
        {showTitle && (
          <SectionTitle
            title="Best Pricing Package For All Web Design Solutions"
            paragraph="Simple, budget-friendly pricing for every web design project."
            center
            width="665px"
          />
        )}

        <div className="w-full mb-8 flex justify-center">
          <span
            onClick={() => setIsMonthly(true)}
            className={`${
              isMonthly ? 'pointer-events-none text-primary' : 'text-dark dark:text-white'
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Monthly
          </span>
          <div onClick={() => setIsMonthly(!isMonthly)} className="flex cursor-pointer items-center">
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isMonthly ? '' : 'translate-x-full'
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsMonthly(false)}
            className={`${
              isMonthly ? 'text-dark dark:text-white' : 'pointer-events-none text-primary'
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingBox
              key={index}
              isPopular={index === 1}
              packageName={plan.planName}
              price={
                isMonthly
                  ? `${plan.priceMonthly || ''} | ${plan.priceMonthlyOld || ''}`
                  : `${plan.priceYearly || ''} | ${plan.priceYearlyOld || ''}`
              }
              duration={isMonthly ? 'mo' : 'yr'}
              subtitle={plan.description}
              showMore={showMore}
              setShowMore={setShowMore}
              setShowModal={setShowModal}
              setModalPlanName={setModalPlanName}
            >
              {plan.features.map((feature, i) => (
                <OfferList key={i} text={feature.featureText} status={feature.isActive ? 'active' : 'inactive'} />
              ))}
            </PricingBox>
          ))}
        </div>
        {/* <div>**Our currency is USD (United States Dollar)</div> */}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} planName={modalPlanName} />
    </section>
  );
}
