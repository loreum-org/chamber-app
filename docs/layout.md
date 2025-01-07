## Layout Specifications

### Global Layout
- **Frame**: Main Application
  - Width: 1440px
  - Height: 100vh
  - Background: #FAFAFA

### Navigation Bar
- **Frame**: Navigation
  - Width: 240px
  - Height: 100vh
  - Background: #FFFFFF
  - Shadow: 1px 0px 4px rgba(0, 0, 0, 0.05)

## Dashboard (Home)

### Treasury Overview
- **Frame**: Treasury-Stats
  - Width: 1200px
  - Height: 160px
  - Layout: Grid (3 columns)
  - Gap: 24px
  - Padding: 24px

#### Stat Cards
- **Frame**: Stat-Card
  - Width: 360px
  - Height: 120px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 20px

  1. Total Assets Card
     - Title: "Total Assets"
     - Value: {totalAssets()} formatted
     - Change: 24h percentage

  2. Total Supply Card
     - Title: "Total Supply"
     - Value: {totalSupply()} formatted
     - Change: 24h percentage

  3. Share Price Card
     - Title: "Share Price"
     - Value: {convertToAssets(1e18)} formatted
     - Change: 24h percentage

### Board Status
- **Frame**: Board-Overview
  - Width: 1200px
  - Height: 320px
  - Layout: Grid (2 columns)
  - Gap: 24px
  - Padding: 24px

#### Directors List
- **Frame**: Directors-List
  - Width: 588px
  - Height: 280px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 20px

#### Quorum Status
- **Frame**: Quorum-Status
  - Width: 588px
  - Height: 280px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 20px

### Recent Activity
- **Frame**: Activity-Feed
  - Width: 1200px
  - Height: 400px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

## Vault Operations

### Deposit/Withdraw Section
- **Frame**: Vault-Operations
  - Width: 1200px
  - Height: 480px
  - Layout: Grid (2 columns)
  - Gap: 24px
  - Padding: 24px

#### Deposit Form
- **Frame**: Deposit-Form
  - Width: 588px
  - Height: 440px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

#### Withdraw Form
- **Frame**: Withdraw-Form
  - Width: 588px
  - Height: 440px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

### Position Overview
- **Frame**: Position-Overview
  - Width: 1200px
  - Height: 240px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

## Governance

### Board Management
- **Frame**: Board-Management
  - Width: 1200px
  - Height: 600px
  - Layout: Grid (2 columns)
  - Gap: 24px
  - Padding: 24px

#### Delegation Interface
- **Frame**: Delegation-Interface
  - Width: 588px
  - Height: 560px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

#### Seat Updates
- **Frame**: Seat-Updates
  - Width: 588px
  - Height: 560px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

## Transactions

### Transaction Management
- **Frame**: Transaction-Management
  - Width: 1200px
  - Height: 800px
  - Layout: Grid (2 columns)
  - Gap: 24px
  - Padding: 24px

#### Queue & History
- **Frame**: Transaction-Queue
  - Width: 788px
  - Height: 760px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

#### Submit Transaction
- **Frame**: Submit-Transaction
  - Width: 388px
  - Height: 760px
  - Background: #FFFFFF
  - Border-Radius: 12px
  - Padding: 24px

## Design System

### Colors
- Primary: #4F46E5
- Secondary: #10B981
- Background: #FAFAFA
- Surface: #FFFFFF
- Text Primary: #1A1A1A
- Text Secondary: #666666
- Border: #E5E7EB
- Success: #10B981
- Warning: #F59E0B
- Error: #EF4444

### Typography
- Headings: Inter Bold
  - H1: 32px
  - H2: 24px
  - H3: 20px
  - H4: 18px
- Body: Inter Regular
  - Large: 16px
  - Regular: 14px
  - Small: 12px
- Metrics: Inter Medium
  - Large: 24px
  - Regular: 18px

### Spacing System
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Component States

#### Buttons
- Primary
  - Default: #4F46E5
  - Hover: #4338CA
  - Active: #3730A3
  - Disabled: opacity 50%

- Secondary
  - Default: #FFFFFF
  - Hover: #F9FAFB
  - Active: #F3F4F6
  - Disabled: opacity 50%

#### Input Fields
- Default: Border #E5E7EB
- Focus: Border #4F46E5
- Error: Border #EF4444
- Disabled: Background #F3F4F6

#### Cards
- Default: Background #FFFFFF
- Hover: Shadow 0px 4px 8px rgba(0, 0, 0, 0.1)
- Active: Border #4F46E5

## Responsive Breakpoints
- Desktop: 1440px
- Laptop: 1024px
- Tablet: 768px
- Mobile: 375px

## Loading States
- Skeleton loading for data fetching
- Spinner for transactions
- Progress bars for confirmations
- Pulse animation for updates

## Error States
- Inline validation messages
- Toast notifications for transactions
- Modal alerts for critical errors
- Warning indicators for low quorum

## Director Profile

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

### Component States

#### NFT Card Hover
- Scale: 1.02
- Shadow: 0px 4px 8px rgba(0, 0, 0, 0.1)
- Transition: 0.2s ease-in-out

#### Activity Items
- Default: Background #F8F9FF
- Hover: Background #F0F0FF
- Active: Background #E8E8FF