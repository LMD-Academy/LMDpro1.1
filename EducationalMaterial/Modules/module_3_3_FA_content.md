
# Module 3.3.FA: Corporate Finance & Valuation Basics

**Level:** 3 (Professional - Specialization)
**Major:** Finance & Accounting (FA)

**Estimated Content Length:** 18-25 A4 Pages

**Prerequisites:** Module 3.1.FA (Advanced Financial Statement Analysis), Module 3.2.FA (Budgeting, Forecasting, and Variance Analysis)

**Learning Objectives:**
*   Understand and apply capital budgeting techniques (NPV, IRR, Payback Period) for investment decisions.
*   Grasp the concept of the cost of capital, including the Weighted Average Cost of Capital (WACC).
*   Explore long-term financing decisions, comparing debt and equity financing.
*   Learn fundamental business valuation methods (Discounted Cash Flow, Comparables/Multiples).
*   Understand the principles and importance of working capital management.

---

## 1. Introduction: Making Strategic Financial Decisions

While financial analysis and budgeting focus on understanding past performance and planning future operations, corporate finance is concerned with the major financial decisions that shape a company's future. It addresses three fundamental questions: What long-term investments should the firm make (capital budgeting)? How should the firm raise the funds for these investments (capital structure)? And how should short-term operating cash flows be managed (working capital management)? At the heart of these decisions is the goal of maximizing shareholder value.

This module, the third in the Finance & Accounting specialization, introduces the core principles of corporate finance and business valuation. Building on your analytical skills, we will first explore **capital budgeting**, the process of evaluating potential long-term investments or projects. You will learn to apply key decision-making techniques like Net Present Value (NPV), Internal Rate of Return (IRR), and the Payback Period. A crucial input for these decisions is the firm's **cost of capital**, and we will cover how to calculate and interpret the Weighted Average Cost of Capital (WACC). We will then examine **long-term financing decisions**, comparing the characteristics, benefits, and risks of using debt versus equity. The module will also introduce you to the fundamentals of **business valuation**, exploring the primary methods used to estimate a company's worth, including the Discounted Cash Flow (DCF) approach and valuation by comparables (multiples). Finally, we will cover the essentials of **working capital management**, focusing on the day-to-day management of current assets and liabilities to ensure operational liquidity and efficiency. Mastering these concepts is crucial for making sound strategic financial decisions that drive long-term value creation.

## 2. Capital Budgeting: Evaluating Long-Term Investments

Capital budgeting is the process a business undertakes to evaluate potential major projects or investments. These are long-term decisions that involve large expenditures and shape the firm's future.

**A. The Time Value of Money (TVM):**
A core principle underlying capital budgeting is that a dollar today is worth more than a dollar tomorrow. This is because today's dollar can be invested to earn interest.
*   **Present Value (PV):** The current value of a future sum of money, discounted at an appropriate interest rate. `PV = FV / (1 + r)^n`
*   **Future Value (FV):** The value of a current asset at a future date based on an assumed rate of growth. `FV = PV * (1 + r)^n`
*   **Discount Rate (r):** The interest rate used to determine the present value of future cash flows. It reflects the risk of the investment and the opportunity cost of capital. Often, the company's WACC is used as a starting point.

**B. Capital Budgeting Decision Rules/Techniques:**

1.  **Net Present Value (NPV):**
    *   **Concept:** Calculates the present value of a project's future cash inflows and subtracts the project's initial cost. It measures the value added to the firm by undertaking the project.
    *   **Formula:** `NPV = Σ [CFt / (1 + r)^t] - C₀`
        *   `CFt`: Cash flow in period t
        *   `r`: Discount rate
        *   `t`: Time period
        *   `C₀`: Initial investment cost
    *   **Decision Rule:**
        *   If **NPV > 0**, accept the project (it is expected to add value).
        *   If **NPV < 0**, reject the project (it is expected to destroy value).
        *   If **NPV = 0**, the project is expected to earn a return exactly equal to the discount rate.
    *   **Strength:** Considered the best decision criterion as it directly measures the increase in firm value in dollar terms.

2.  **Internal Rate of Return (IRR):**
    *   **Concept:** The discount rate that makes the NPV of all cash flows from a particular project equal to zero. It represents the expected percentage rate of return of the project.
    *   **Decision Rule:**
        *   If **IRR > Cost of Capital (or required rate of return)**, accept the project.
        *   If **IRR < Cost of Capital**, reject the project.
    *   **Strengths:** Intuitively appealing (easy to understand a percentage return), considers the time value of money.
    *   **Weaknesses:**
        *   *Multiple IRRs:* Can yield multiple IRRs for projects with non-conventional cash flows (e.g., a negative cash flow at the end).
        *   *Mutually Exclusive Projects:* Can give conflicting rankings compared to NPV for projects of different scales or cash flow timing. **In cases of conflict, the NPV decision is superior.**

3.  **Payback Period:**
    *   **Concept:** Measures the length of time it takes for a project to recoup its initial investment from its cumulative cash inflows.
    *   **Decision Rule:** Accept projects that pay back within a pre-specified period.
    *   **Strengths:** Simple to calculate and understand, provides an indication of risk and liquidity.
    *   **Weaknesses:**
        *   **Ignores the time value of money.** (A discounted payback period variant can address this).
        *   **Ignores cash flows beyond the payback period.**
        *   The cutoff period is arbitrary.
    *   **Use:** Often used as a secondary, supplemental criterion or for initial screening of projects.

## 3. Cost of Capital

The cost of capital is the required rate of return a firm must earn on its investments to maintain its market value and attract funds. It is the "hurdle rate" that new projects must clear.

**A. Weighted Average Cost of Capital (WACC):**
*   **Concept:** The average rate of return a company is expected to pay to all its security holders (debt and equity) to finance its assets. It is weighted by the proportion of each type of capital in the company's capital structure.
*   **Formula:** `WACC = (E/V) * Re + (D/V) * Rd * (1 - Tc)`
    *   `E`: Market value of the firm's equity
    *   `D`: Market value of the firm's debt
    *   `V`: Total market value of the firm (E + D)
    *   `Re`: Cost of Equity
    *   `Rd`: Cost of Debt
    *   `Tc`: Corporate tax rate
*   **Components:**
    *   **Cost of Equity (Re):** The return required by equity investors. Harder to estimate than cost of debt.
        *   *Common Method: Capital Asset Pricing Model (CAPM):* `Re = Rf + β * (Rm - Rf)`
            *   `Rf`: Risk-Free Rate (e.g., yield on long-term government bonds).
            *   `β` (Beta): A measure of the stock's volatility relative to the overall market. Beta > 1 means more volatile than the market; Beta < 1 means less volatile.
            *   `(Rm - Rf)`: Market Risk Premium (the excess return expected from the market over the risk-free rate).
    *   **Cost of Debt (Rd):** The effective interest rate a company pays on its debt. For new debt, this is the yield to maturity (YTM) on the company's bonds.
    *   **Tax Shield:** The `(1 - Tc)` term reflects the fact that interest payments on debt are tax-deductible, creating a "tax shield" that reduces the effective cost of debt.

**B. Using the WACC:**
*   The WACC is commonly used as the discount rate (`r`) in NPV calculations for projects that have a similar risk profile to the company as a whole.
*   For projects with significantly different risk, a project-specific or divisional WACC should be used, adjusted for that project's specific risk.

## 4. Long-Term Financing Decisions

How should a firm fund its investments? The primary choices are debt and equity.

**A. Debt Financing:**
*   **Definition:** Borrowing money that must be repaid over time, usually with interest.
*   **Sources:** Bank loans, issuing bonds.
*   **Characteristics:**
    *   Creates a legal obligation to make interest and principal payments.
    *   Interest payments are tax-deductible.
    *   Debt holders have prior claim on assets in case of bankruptcy.
    *   Does not dilute ownership control of existing shareholders.
    *   Can have restrictive covenants that limit the company's actions.
*   **Pros:** Lower cost than equity (due to lower risk for investors and tax shield), owners retain control.
*   **Cons:** Increases financial risk (leverage) and risk of bankruptcy if payments can't be made; required payments are fixed regardless of firm performance.

**B. Equity Financing:**
*   **Definition:** Selling ownership stakes in the company to investors in exchange for cash.
*   **Sources:** Venture capital, angel investors, issuing common stock (Initial Public Offering - IPO, or secondary offerings).
*   **Characteristics:**
    *   Equity holders are owners of the company.
    *   No legal obligation to pay dividends to common shareholders.
    *   Equity holders have a residual claim on assets after debt holders are paid.
    *   Issuing new shares dilutes the ownership stake of existing shareholders.
*   **Pros:** Less risky for the firm (no required payments), provides a permanent source of capital.
*   **Cons:** Higher cost than debt (investors require higher returns for higher risk), dilutes ownership and control, dividends are not tax-deductible.

**Capital Structure:** The mix of debt and equity a company uses to finance its assets. The optimal capital structure is one that minimizes the WACC and maximizes firm value. This is a central topic in advanced corporate finance.

## 5. Business Valuation Fundamentals

Business valuation is the process of determining the economic value of a business or company.
**A. Discounted Cash Flow (DCF) Valuation:**
*   **Concept:** An intrinsic valuation method. The value of a company is the present value of its expected future cash flows.
*   **Process (Simplified Free Cash Flow to Firm - FCFF - model):**
    1.  **Forecast Future Cash Flows:** Project the company's free cash flows (cash available to all investors, both debt and equity) for a specific forecast period (e.g., 5-10 years).
        *   `FCFF = EBIT * (1 - Tax Rate) + Depreciation & Amortization - Capital Expenditures - Change in Net Working Capital`
    2.  **Calculate a Terminal Value:** Estimate the value of the company's cash flows beyond the explicit forecast period.
        *   *Perpetuity Growth Model:* `Terminal Value = [FCF_final * (1 + g)] / (WACC - g)` where `g` is a constant, long-term growth rate.
    3.  **Discount to Present Value:** Discount both the forecasted cash flows and the terminal value back to the present using the WACC.
    4.  **Calculate Enterprise Value:** The sum of the present values of the forecasted cash flows and the terminal value gives the Enterprise Value (the value of the entire business).
    5.  **Calculate Equity Value:** `Equity Value = Enterprise Value - Market Value of Debt + Cash`.
*   **Strength:** Theoretically sound, based on a company's ability to generate cash.
*   **Weakness:** Highly sensitive to assumptions (growth rates, discount rate, terminal value), which can be difficult to estimate accurately.

**B. Comparable Company Analysis (Comps) / Multiples Valuation:**
*   **Concept:** A relative valuation method. Values a company by comparing it to similar companies (publicly traded peers) based on valuation multiples.
*   **Process:**
    1.  **Select a Universe of Comparable Companies:** Identify public companies in the same industry with similar size, growth prospects, and risk profiles.
    2.  **Gather Financial Data:** Collect relevant financial metrics (e.g., revenue, EBITDA, EPS) and market values (e.g., stock price, enterprise value) for the comparable companies.
    3.  **Calculate Valuation Multiples:** Compute multiples for the comparable companies. Common multiples include:
        *   **Price-to-Earnings (P/E):** `Market Price per Share / Earnings per Share`
        *   **Enterprise Value-to-EBITDA (EV/EBITDA):** `Enterprise Value / EBITDA`
        *   **Price-to-Sales (P/S):** `Market Capitalization / Revenue`
    4.  **Apply the Multiple:** Calculate the average or median multiple from the comparable companies and apply it to the target company's relevant financial metric to estimate its value.
        *   `Estimated Value = Target Company's Metric * Comparable Multiple`
*   **Strengths:** Reflects current market sentiment, relatively simple to apply if good comparables exist.
*   **Weaknesses:** Finding truly comparable companies can be difficult, can be distorted by temporary market fluctuations, doesn't account for specific company characteristics.

Often, analysts use multiple valuation methods (e.g., DCF, Comps, Precedent Transaction Analysis) to arrive at a valuation range.

## 6. Working Capital Management

Working capital management involves the day-to-day management of current assets and current liabilities to ensure the firm has sufficient cash flow to meet its short-term operating expenses and obligations.

*   **Net Working Capital (NWC):** `Current Assets - Current Liabilities`
*   **Cash Conversion Cycle (CCC):** A key metric that measures the time (in days) it takes for a company to convert its investments in inventory and other resources into cash from sales.
    *   `CCC = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payable Outstanding (DPO)`
    *   **Goal:** To minimize the CCC, which frees up cash for other purposes.
*   **Managing Current Assets:**
    *   **Cash Management:** Maintaining optimal cash balances (enough for needs, but not too much idle cash).
    *   **Accounts Receivable Management:** Setting credit policies, invoicing promptly, actively collecting receivables to reduce DSO.
    *   **Inventory Management:** Using techniques like Economic Order Quantity (EOQ) and Just-in-Time (JIT) to minimize inventory holding costs while avoiding stockouts.
*   **Managing Current Liabilities:**
    *   **Accounts Payable Management:** Negotiating favorable credit terms with suppliers and managing payment schedules to optimize cash flow (e.g., taking advantage of early payment discounts, but not paying earlier than necessary).
    *   **Short-Term Financing:** Managing sources of short-term loans or credit lines to cover temporary cash shortfalls.

Efficient working capital management is crucial for a company's liquidity and profitability.

## 7. Conclusion

This module has introduced you to the core decision-making areas of corporate finance. You've learned how to evaluate investment opportunities using capital budgeting techniques, understand the cost of capital that serves as a hurdle rate, compare the fundamental choices of debt and equity financing, apply basic valuation methodologies, and appreciate the importance of managing working capital. These concepts provide the financial framework for making strategic decisions that drive long-term value for an organization. In more advanced courses, you will explore these topics in greater depth, delving into capital structure theory, complex valuation models, and advanced risk management strategies.
