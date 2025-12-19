ALVERRI — Companion Edition
Software Design Document (SDD)
“The friend that grows with you.”
Ages 0–10 | Companion-Led Digital Upbringing

1. Project Overview
   1.1 App Name
   ALVERRI (Companion Edition)
   1.2 The Big Picture
   Children today do not simply use applications — they are absorbed by them. Most digital products either prioritize entertainment at the cost of safety, or education at the cost of engagement.

Alverri redefines the relationship between a child and a screen by introducing a trusted animated companion that guides learning, enforces discipline, encourages creativity, and protects privacy.

Alverri is not just an app. It is a structured digital upbringing system.
1.3 Problem It Solves

- Exposure to unsafe and inappropriate content
- Addictive scrolling and algorithmic manipulation
- Lack of routine, discipline, and moral structure
- No financial literacy or responsibility training
- Parents forced to spy or over-restrict
  1.4 Target Users
  Primary Users:
- Children aged 0 to 10 years

Secondary Users:

- Parents and guardians seeking safety, learning, and discipline
  1.5 Platform
- Mobile application (Tablet-first)
- iOS and Android
- Built using React Native
  1.6 Technology Philosophy
- One unified app
- Two age-based cognitive modes
- Avatar-led interactions
- Local-first intelligence
- Cloud-assisted supervision
- No infinite scroll
- No addictive UX patterns

2. Functional Requirements
   2.1 Core Capabilities

- Parent-managed login and child profiles
- Age-based UI and ruleset switching
- Animated avatar present at all times
- Learning, entertainment, and routine management
- Token-based economy
- Emergency and safety features
- Parent dashboard with summaries
- Privacy-first analytics
  2.2 Age-Based Feature Split
  Ages 0–5 (Foundation Mode):
- Scribbling and drawing
- Stories, songs, phonics
- Numbers, shapes, morals
- No community or posting

Ages 6–10 (Exploration Mode):

- Controlled reels and long-form videos
- Educational and entertainment games
- Challenges and creative posting
- Token economy and responsibility training

3. Non-Functional Requirements

- App response time under 2 seconds
- Smooth animations at 60 FPS
- Offline support for core features
- Secure encrypted communication
- COPPA and GDPR-K compliance
- High availability and scalability
- Graceful failure handling

4. System Architecture
   The Alverri system follows a layered architecture:

React Native Mobile App
↓ HTTPS / WebSockets
FastAPI Backend (Python)
↓
AI Engine (Rules + OpenAI)
↓
PostgreSQL / Redis / AWS S3

All child-facing decisions prioritize local rules before cloud processing. 5. Frontend Documentation
5.1 Frontend Technology Stack

- React Native (Framework)
- TypeScript (Language)
- Reanimated (Animations)
- Gesture Handler (Gestures)
- Rive (Interactive character animation)
- Lottie (Micro-animations)
- Figma (UI/UX design)
  5.2 Frontend Folder Structure
  src/
  ├── components/
  ├── screens/
  ├── navigation/
  ├── services/
  ├── animations/
  ├── styles/
  └── utils/
  5.3 Core UI Components
  Avatar: Animated guide and authority figure
  ScribbleCanvas: Drawing and motor skill development
  ReelsView: Short controlled video content
  GameHub: Educational and entertainment games
  TokenWallet: Visual representation of earned value
  RoutineOverlay: Sleep and chore enforcement
  EmergencyButton: Safety trigger
  ParentDashboard: Parent-only controls and summaries

6. UI / UX Design Documentation
   6.1 Design Principles

- Avatar-first interaction
- Low cognitive load
- Warm authority inspired by Asian discipline models
- Clear boundaries without punishment
- Encouragement over pressure
  6.2 User Flow (Child)

1. App opens and avatar greets the child
2. Avatar suggests appropriate activities
3. Child chooses an activity
4. Tokens are earned or spent
5. Avatar manages transitions
6. App enters sleep mode at bedtime
   6.3 Screen Layouts
   Ages 0–5 Home Screen:

- 70% Scribble canvas
- 30% avatar guidance
- No navigation menus

Ages 6–10 Home Screen:

- Avatar visible at all times
- Large card-based navigation
- Token balance displayed

Reels Screen:

- One reel at a time
- Session limits
- Avatar commentary

Parent Dashboard:

- Child summaries
- Emotional indicators
- Token and schedule controls

7. Color System
   Primary Colors:
   Sky Blue (#5DA9E9): Trust and calm
   Soft Peach (#FFD6A5): Warmth and safety
   Mint Green (#7ED957): Growth and success
   Lavender (#B8B5FF): Creativity and calm
   Amber (#FFB703): Warnings
   Coral Red (#E63946): Errors
   Warm Off-White (#FFF9F2): Background

These colors are chosen to be lively yet soothing, supporting animated characters without overstimulation. 8. Backend Documentation

- Python + FastAPI
- PostgreSQL (Primary DB)
- Redis (Cache / Sessions)
- AWS S3 (File storage)
- JWT & OAuth (Authentication)
- WebSockets (Realtime updates)

9. Database Design
   Core tables include:

- Users
- Children
- Tokens
- Activities
- Content
- Schedules

All child-related data is minimized and privacy-preserving. 10. Security Design

- HTTPS everywhere
- Encrypted JWT tokens
- Role-based access control
- Rate limiting
- No cloud storage of raw child conversations

11. AI Integration
    Child input is first evaluated by a rule engine. Only when allowed does the AI generate a response. All outputs are filtered and delivered through the avatar.
12. Testing Strategy

- Backend unit testing
- API testing
- UI and animation testing
- Child usability testing

13. Deployment

- Dockerized services
- AWS cloud hosting
- CI/CD via GitHub Actions
- Monitoring with Sentry

14. Maintenance & Scaling

- Horizontal scaling
- Redis caching
- Feature flags
- Continuous moderation updates

15. Future Improvements

- Multi-language support
- Teen mode (11–15)
- Hardware companion
- School and curriculum integrations

16. Next Steps After This Document
1. Avatar behavior and moral rulebook
1. Detailed Figma wireframes
1. Animation state machine design
1. Token economy mathematics
1. Engineering sprint roadmap
