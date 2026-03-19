# SurakshaAI-AI-Powered-Income-Protection-for-Gig-Workers
An AI-powered parametric insurance platform that safeguards delivery partners from income loss due to weather and external disruptions through dynamic weekly pricing, automated claim triggering, and instant payouts.
## Problem Statement

Delivery partners in India (Zomato, Swiggy, Blinkit, etc.) depend on daily earnings. 
External disruptions such as heavy rain, extreme heat, pollution, or curfews reduce their working hours and lead to 20–30% income loss.

Currently, there is no insurance system that protects gig workers from such income loss.

Our goal is to build an AI-powered parametric insurance platform that automatically detects disruptions and provides instant payouts to workers.
## Target Persona

We focus on Food Delivery Partners working with platforms like Zomato and Swiggy.

### Persona Details:
- Age: 20–35
- Works 8–10 hours daily
- Average income: ₹400–₹800/day
- Highly dependent on weather conditions
- Paid per delivery

### Pain Points:
- Cannot work during heavy rain or heat
- No income protection
- Weekly financial instability
## Scenario

Ravi is a Swiggy delivery partner in Mumbai.

On a normal day:
- Works 10 hours
- Earns ₹600

During heavy rainfall:
- Works only 4 hours
- Earns ₹250
- Loses ₹350

Our system detects the rainfall automatically and compensates Ravi for the lost income instantly.
## Application Workflow

1. Worker registers on platform
2. System collects:
   - Location
   - Work hours
   - Average earnings

3. AI calculates weekly premium
4. Worker purchases insurance policy

5. System continuously monitors:
   - Weather
   - Pollution
   - External disruptions

6. If disruption occurs:
   - Claim triggered automatically
   - Loss calculated
   - Instant payout initiated

7. Worker views all details in dashboard
## Weekly Premium Model

We use a dynamic AI-based weekly pricing model.

### Inputs:
- Location risk (rainfall, pollution history)
- Work hours per day
- Average income per day
- Historical disruption frequency

### Example:

| Risk Level | Weekly Premium |
|-----------|--------------|
| Low Risk Area | ₹20/week |
| Medium Risk Area | ₹35/week |
| High Risk Area | ₹50/week |

### Logic:

Premium = Base Price + Risk Factor + Coverage Level

### Benefits:
- Matches gig worker earning cycle
- Affordable micro-payments
- Dynamic adjustment every week
## Parametric Triggers

Claims are automatically triggered based on external data:

### Weather-Based:
- Rainfall > 50mm/hour → Claim triggered
- Temperature > 42°C → Reduced working hours

### Pollution-Based:
- AQI > 300 → Unsafe working conditions

### Social Disruptions:
- Curfew / Local strike (mock API)

### Platform-Based:
- Delivery app outage (simulated)

### Key Advantage:
No manual claim filing → Zero friction → Instant payout
## AI/ML Integration

### 1. Risk Assessment Model
- Predicts probability of disruptions
- Adjusts weekly premium dynamically

### 2. Income Loss Estimation
- Predicts expected vs actual earnings

### 3. Fraud Detection
- Detects:
  - GPS spoofing
  - Duplicate claims
  - Fake activity

### 4. Predictive Analytics
- Forecast next week’s risk level
- Suggest optimal coverage

### Approach:
- Rule-based + ML hybrid model
- Use historical + synthetic data
## Tech Stack

### Frontend:
- Next.js
- Tailwind CSS

### Backend:
- Next.js API Routes

### Database:
- MongoDB / PostgreSQL

### APIs:
- Weather API (OpenWeather)
- AQI API

### Payment:
- Razorpay (Test Mode)

### AI/ML:
- TensorFlow.js / Python APIs (optional)

### Deployment:
- Vercel
## Development Plan

### Phase 1:
- Research & planning
- Define persona
- Design workflow
- Build UI prototype

### Phase 2:
- Implement:
  - Registration
  - Policy system
  - Premium calculation
  - Claim automation

### Phase 3:
- Add:
  - Fraud detection
  - Payment simulation
  - Dashboard analytics
  ## Platform Choice: Web App

We chose a web platform because:

- Faster development for hackathon
- Cross-device compatibility
- No installation required
- Easy integration with APIs

Future Scope:
- Convert to mobile app (React Native)
## Dashboard Features

For Workers:
- Active policy
- Weekly premium
- Earnings protected
- Claim status

For Admin:
- Risk analytics
- Claim history
- Fraud alerts
## What Makes Our Solution Unique?

- AI-based dynamic premium pricing
- Fully automated claim system
- Real-time disruption monitoring
- Zero paperwork insurance
- Designed specifically for gig workers
## Future Enhancements

- WhatsApp alerts
- Voice assistant for workers
- Hyperlocal risk heatmaps
- Blockchain-based claim logs