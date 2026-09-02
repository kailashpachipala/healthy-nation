# Healthy Nation - Design System

## Design Philosophy

**Medical-Grade Clean Interface**: Built for trust, clarity, and accessibility in healthcare contexts. Every element serves a functional purpose while maintaining visual elegance that reduces anxiety and promotes confidence in medical decisions.

**Color Psychology**: Soft blues and teals evoke calm, trust, and medical professionalism. Colors are carefully selected to work for users with various visual abilities and to maintain consistency with healthcare industry standards.

**Typography Hierarchy**: Clear, readable fonts optimized for medical data display, with careful attention to accessibility standards and multi-language support.

## Color Palette

### Primary Colors
- **Medical Blue**: #2563EB (Primary actions, navigation)
- **Teal Accent**: #0891B2 (Secondary actions, highlights)
- **Soft Blue**: #DBEAFE (Backgrounds, cards)
- **Light Teal**: #E0F2FE (Success states, healthy vitals)

### Semantic Colors
- **Success Green**: #059669 (Normal vitals, completed tasks)
- **Warning Amber**: #D97706 (Caution alerts, moderate risk)
- **Critical Red**: #DC2626 (Emergency alerts, critical vitals)
- **Neutral Gray**: #6B7280 (Secondary text, borders)
- **Light Gray**: #F3F4F6 (Background, dividers)
- **White**: #FFFFFF (Primary background, cards)

### Text Colors
- **Primary Text**: #1F2937 (High contrast, main content)
- **Secondary Text**: #6B7280 (Supporting information)
- **Light Text**: #9CA3AF (Timestamps, metadata)
- **White Text**: #FFFFFF (Text on colored backgrounds)

## Typography

### Font Families
- **Primary**: Inter (Clean, medical-grade readability)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Font Sizes
- **Heading 1**: 28px (Page titles, major sections)
- **Heading 2**: 24px (Section headers, card titles)
- **Heading 3**: 20px (Subsection headers)
- **Body Large**: 18px (Primary content, vital readings)
- **Body Regular**: 16px (Standard text, descriptions)
- **Body Small**: 14px (Secondary text, labels)
- **Caption**: 12px (Timestamps, metadata)

### Font Weights
- **Bold**: 700 (Headings, important data)
- **Semibold**: 600 (Emphasized text, buttons)
- **Medium**: 500 (Card titles, labels)
- **Regular**: 400 (Body text, descriptions)

## Visual Effects & Animation

### Used Libraries
- **Anime.js**: Smooth micro-interactions and state transitions
- **ECharts.js**: Medical data visualization with accessibility
- **Splide**: Smooth carousels for doctor profiles and health tips
- **p5.js**: Subtle background animations for wellness sections

### Animation Principles
- **Micro-interactions**: 200-300ms duration for button states
- **Page transitions**: 400-500ms with easing curves
- **Data loading**: Skeleton screens with gentle pulse animations
- **Vital updates**: Smooth number transitions with color state changes

### Card Effects
- **Subtle Shadows**: 0 4px 6px rgba(0, 0, 0, 0.05) for depth
- **Hover States**: Gentle lift with increased shadow
- **Border Radius**: 12px for modern, approachable feel
- **State Indicators**: Color-coded borders for vital status

### Background Effects
- **Gradient Overlays**: Subtle blue-to-teal gradients for hero sections
- **Particle Systems**: Minimal floating elements for wellness mood
- **Blur Effects**: Backdrop blur for modal overlays
- **Pattern Overlays**: Subtle medical cross patterns for branding

## Layout & Spacing

### Grid System
- **Container Max Width**: 1200px
- **Mobile Padding**: 16px horizontal
- **Desktop Padding**: 24px horizontal
- **Section Spacing**: 32px vertical between major sections

### Card Layout
- **Card Padding**: 20px internal padding
- **Card Margin**: 16px between cards
- **Border Radius**: 12px for all cards
- **Min Height**: 80px for touch targets

### Interactive Elements
- **Button Height**: 48px minimum for accessibility
- **Touch Targets**: 44px minimum for mobile
- **Form Fields**: 56px height with 12px padding
- **Icon Sizes**: 24px standard, 32px for primary actions

## Component Styles

### Buttons
- **Primary**: Blue background, white text, 12px border radius
- **Secondary**: Teal outline, teal text, transparent background
- **Danger**: Red background for critical actions
- **Ghost**: Transparent with colored text for subtle actions

### Cards
- **Vital Cards**: Color-coded borders based on health status
- **Doctor Cards**: Professional layout with ratings and availability
- **Appointment Cards**: Time-focused design with action buttons
- **History Cards**: Information-dense with clear hierarchy

### Forms
- **Input Fields**: Clean borders with focus states
- **Dropdowns**: Custom styled with smooth animations
- **Toggles**: Medical-grade switches for settings
- **Validation**: Inline feedback with appropriate colors

### Data Visualization
- **Chart Colors**: Consistent with brand palette
- **Accessibility**: High contrast ratios maintained
- **Interactive States**: Hover effects for data points
- **Loading States**: Skeleton screens with medical theme

## Accessibility Standards

### Contrast Ratios
- **Normal Text**: 4.5:1 minimum contrast
- **Large Text**: 3:1 minimum contrast
- **Interactive Elements**: Clear focus indicators
- **Color Coding**: Never rely solely on color for meaning

### Touch Targets
- **Minimum Size**: 44px x 44px for all interactive elements
- **Spacing**: 8px minimum between touch targets
- **Feedback**: Visual and haptic feedback for interactions

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive text for all images and icons
- **Labels**: Clear labels for all form controls
- **Status Updates**: Live regions for dynamic content updates