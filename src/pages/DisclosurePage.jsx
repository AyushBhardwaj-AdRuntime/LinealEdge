import React, { useEffect } from 'react';
import SubscribeBand from '../components/SubscribeBand';

export default function DisclosurePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content">
      <section className="page-hero compact">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="page-label"><div className="label-line" /><span className="label-text">Legal</span></div>
          <h1 className="page-hero-title">Disclosure</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner narrow">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 15, 2026</p>

            <h2 className="legal-heading">Important Information</h2>
            <p className="legal-text">
              Lineal Edge, LLC ("Lineal Edge," "we," "us," or "our") is a registered investment advisor with the U.S. Securities and Exchange Commission (SEC). Registration with the SEC does not constitute an endorsement by the SEC nor does it indicate that the advisor has attained a particular level of skill or ability.
            </p>

            <h2 className="legal-heading">Investment Risks</h2>
            <p className="legal-text">
              All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results. The value of investments and the income derived from them can go down as well as up. You may not get back the amount you originally invested. Returns are presented net of advisory fees unless otherwise noted.
            </p>

            <h2 className="legal-heading">Performance Disclosures</h2>
            <p className="legal-text">
              Performance data quoted represents past performance. Past performance is not a guarantee of future results. Investment return and principal value will fluctuate so that an investor's shares, when redeemed, may be worth more or less than their original cost. Current performance may be lower or higher than the performance data quoted.
            </p>
            <p className="legal-text">
              Hypothetical performance results have many inherent limitations. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. There are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular bespoke financial roadmap.
            </p>

            <h2 className="legal-heading">Advisory Fees</h2>
            <p className="legal-text">
              Lineal Edge charges an annual advisory fee based on assets under management (AUM). The standard fee schedule is 0.75% per annum for accounts with AUM under $5,000,000. Custom fee structures tailored to complex generational wealth are available for larger bespoke accounts. Advisory fees are billed quarterly in arrears. A complete description of our fees and services is available in our Form ADV Part 2A (Firm Brochure).
            </p>

            <h2 className="legal-heading">Conflicts of Interest</h2>
            <p className="legal-text">
              As a fiduciary, Lineal Edge is committed to acting in the best interests of our clients. However, potential conflicts of interest may arise in the ordinary course of business. We encourage all clients and prospective clients to review our Form ADV Part 2A, which contains a full description of our services, fees, and potential conflicts of interest.
            </p>

            <h2 className="legal-heading">Third-Party Information</h2>
            <p className="legal-text">
              Certain information contained herein has been obtained from third-party sources believed to be reliable, but we cannot guarantee its accuracy or completeness. This information is provided for informational purposes only and should not be relied upon as investment advice.
            </p>

            <h2 className="legal-heading">Regulatory Information</h2>
            <p className="legal-text">
              Lineal Edge, LLC is registered as an investment advisor with the Securities and Exchange Commission. Our CRD number is [CRD#]. Our Form ADV Parts 1 and 2 are available on the SEC's Investment Adviser Public Disclosure (IAPD) website at <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener noreferrer" className="legal-link">adviserinfo.sec.gov</a>.
            </p>

            <h2 className="legal-heading">Contact</h2>
            <p className="legal-text">
              For questions regarding this disclosure or any regulatory matter, please contact our compliance department at <a href="mailto:compliance@linealedge.com" className="legal-link">compliance@linealedge.com</a>.
            </p>
          </div>
        </div>
      </section>

      <SubscribeBand />
    </main>
  );
}
