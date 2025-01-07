## Design Specifications

### Page Layout
- **Frame**: Director Profile Page
  - Width: 1440px
  - Height: 900px
  - Background: #FAFAFA

### Header Section
- **Frame**: Header
  - Width: 1440px
  - Height: 80px
  - Background: #FFFFFF
  - Shadow: 0px 2px 4px rgba(0, 0, 0, 0.05)

### Main Content Grid
- **Frame**: Content
  - Width: 1440px
  - Height: 820px
  - Layout: Grid (3 columns)
  - Gap: 24px
  - Padding: 32px

### Left Column - NFT Display
- **Frame**: NFT-Display
  - Width: 400px
  - Height: 600px
  - Background: #FFFFFF
  - Border-Radius: 16px
  - Padding: 24px

#### NFT Image Container
- **Frame**: NFT-Image
  - Width: 352px
  - Height: 352px
  - Border-Radius: 12px
  - Background: #F0F0F0

#### NFT Info
- **Text**: Token ID #1234
  - Font: Inter Bold, 24px
  - Color: #1A1A1A
  - Margin-top: 16px

- **Text**: Board Position #1
  - Font: Inter Medium, 18px
  - Color: #666666
  - Margin-top: 8px

### Middle Column - Trust Metrics
- **Frame**: Trust-Metrics
  - Width: 400px
  - Height: 600px
  - Background: #FFFFFF
  - Border-Radius: 16px
  - Padding: 24px

#### Trust Score
- **Frame**: Trust-Score
  - Width: 352px
  - Height: 120px
  - Background: #F8F9FF
  - Border-Radius: 12px
  - Padding: 16px

#### Metrics Grid
- **Frame**: Metrics-Grid
  - Width: 352px
  - Layout: Grid (2 columns)
  - Gap: 16px
  - Margin-top: 24px

### Right Column - Activity
- **Frame**: Activity
  - Width: 400px
  - Height: 600px
  - Background: #FFFFFF
  - Border-Radius: 16px
  - Padding: 24px

#### Activity List
- **Frame**: Activity-List
  - Width: 352px
  - Layout: Vertical
  - Gap: 16px
  - Margin-top: 16px

## Trust Score Components

### Calculation Weights
1. Transaction Success Rate (30%)
   - Ratio of successful to total proposed transactions
2. Delegation Stability (25%)
   - Duration and amount of stable delegations
3. Governance Participation (20%)
   - Rate of participation in confirmations and votes
4. Value Management (15%)
   - Total value of successfully managed transactions
5. Community Trust (10%)
   - Number of unique delegators

## Design System

### Colors
- Primary: #4F46E5
- Background: #FAFAFA
- White: #FFFFFF
- Text Primary: #1A1A1A
- Text Secondary: #666666
- Border: #E5E7EB
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Metrics: Inter Medium

### Spacing System
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

## Interactive Features
1. Hover over NFT to see expanded stats
2. Click to view detailed profile
3. Timeline view of director's activity
4. Delegation button directly on profile
5. Performance graphs and charts

## Component States

### NFT Card Hover
- Scale: 1.02
- Shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
- Transition: 0.2s ease-in-out

### Activity Items
- Default: Background #F8F9FF
- Hover: Background #F0F0FF
- Active: Background #E8E8FF

### Buttons
- Default: Primary color
- Hover: Darken 10%
- Active: Darken 20%
- Disabled: Opacity 50%

## Responsive Behavior
- 1440px: Full desktop layout
- 1024px: Tablet layout (2 columns)
- 768px: Mobile layout (single column)
- 375px: Mobile compact layout