// SportFiberDawn Master Client Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Synchronization
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 2. Interactive FAQs Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Interactive Sport Fiber Ergonomics & Cushioning Calculator
  const activityType = document.getElementById('calc-activity');
  const distanceMiles = document.getElementById('calc-distance');
  const fiberComposition = document.getElementById('calc-fiber');
  const resPressure = document.getElementById('calc-pressure-val');
  const resWick = document.getElementById('calc-wick-val');
  const resRating = document.getElementById('calc-rating-val');

  function updateSockCalculations() {
    if (!activityType || !distanceMiles || !fiberComposition) return;
    const act = activityType.value;
    const miles = parseInt(distanceMiles.value, 10) || 10;
    const fiber = fiberComposition.value;

    let pressurePsi = 28;
    let wickRate = "8.4 mL/hr";
    let blisterRisk = "Zero (0.02% friction coeff)";

    if (act === 'marathon') {
      pressurePsi = 42;
      wickRate = "14.2 mL/hr";
    } else if (act === 'trail') {
      pressurePsi = 58;
      wickRate = "12.8 mL/hr";
    } else if (act === 'cycling') {
      pressurePsi = 22;
      wickRate = "6.5 mL/hr";
    }

    if (fiber === 'merino-poly') {
      pressurePsi += 6;
      wickRate = (parseFloat(wickRate) * 1.3).toFixed(1) + " mL/hr";
      blisterRisk = "Minimal (<0.01% friction coeff)";
    } else if (fiber === 'pure-synthetic') {
      wickRate = (parseFloat(wickRate) * 1.45).toFixed(1) + " mL/hr";
    }

    if (resPressure) resPressure.textContent = pressurePsi + " PSI Damping";
    if (resWick) resWick.textContent = wickRate;
    if (resRating) resRating.textContent = blisterRisk;
  }

  if (activityType && distanceMiles && fiberComposition) {
    [activityType, distanceMiles, fiberComposition].forEach(el => {
      el.addEventListener('change', updateSockCalculations);
      el.addEventListener('input', updateSockCalculations);
    });
    updateSockCalculations();
  }
});
