# 🏠 CleanHomes AI Chatbot

[![Voiceflow](https://img.shields.io/badge/Voiceflow-Platform-6366f1)](https://voiceflow.com/)
[![React](https://img.shields.io/badge/React-TypeScript-61dafb)](https://react.dev/)
[![AI Powered](https://img.shields.io/badge/AI-Conversational-brightgreen)](https://github.com)
[![Voice Enabled](https://img.shields.io/badge/Voice-Enabled-orange)](https://github.com)

> **Intelligent voice and text chatbot that converts website visitors into customers. Built with Voiceflow, Mike handles inquiries, guides service selection, and completes bookings seamlessly.**

Meet Mike, your friendly AI assistant who helps customers explore cleaning packages, answer questions, and book services—all through natural conversation via voice or text.


---

🎥 **Project Demo Video:**
[![Watch the video](https://img.youtube.com/vi/hxwA0PrPl-M/0.jpg)](https://youtu.be/hxwA0PrPl-M)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Conversation Flows](#-conversation-flows)
- [Website Integration](#-website-integration)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Best Practices](#-best-practices)
- [License](#-license)

---

## 🎯 Overview

**CleanHomes AI Chatbot** is a sophisticated conversational agent built in Voiceflow that serves as your 24/7 customer support and booking assistant. Mike engages website visitors, guides them through service options, answers questions, and completes bookings—all while maintaining a friendly, helpful personality.

### What Makes This Special?

- 🎙️ **Voice & Text Enabled** - Customers can type or speak naturally
- 🤖 **AI-Powered Conversations** - Natural language understanding with context awareness
- 📋 **Smart Booking System** - Collects all necessary information conversationally
- 🎨 **Interactive UI Elements** - Buttons, carousels, and formatted responses
- 📊 **Automated Data Collection** - Saves bookings directly to Google Sheets
- 🔄 **Multi-Flow Navigation** - Seamlessly handles browsing, pricing, and booking
- 💬 **Friendly Personality** - Mike feels like talking to a helpful friend

### Who Is This For?

- 🏢 **Cleaning Service Businesses** - Convert website visitors into customers
- 💼 **Small Business Owners** - Automate customer service and bookings
- 🚀 **Startups** - Professional customer experience without large support teams
- 🏘️ **Home Service Providers** - Plumbers, electricians, lawn care, etc.
- 📱 **Local Service Businesses** - Any business that needs appointment booking

---

## ✨ Key Features

### 🗣️ **Conversational AI Interface**
- Natural language processing via Voiceflow
- Voice input and text chat support
- Context-aware responses
- Maintains conversation history
- Friendly, concise communication style

### 🎯 **Three Main Conversation Flows**

**1. Just Browsing**
- Helps undecided visitors find direction
- Asks clarifying questions
- Provides service information from knowledge base
- Guides package selection with 2-3 questions
- Answers specific customer questions

**2. Pricing & Plans**
- Displays interactive pricing carousel
- Shows all packages with pricing
- Receives selected plan from carousel
- Provides detailed plan information
- Transitions to booking when ready

**3. Book a House-Cleaning Service**
- Collects service/plan preference
- Gathers customer information:
  - First and last name
  - Phone number
  - Complete address
  - Preferred date and time
- Saves booking to Google Sheets
- Confirms booking and follow-up

### 🎨 **Rich UI Components**
- Interactive buttons for quick selections
- Pricing carousels for visual comparison
- Formatted responses with bold/italic text
- Bullet points for readability
- Emoji support for friendliness

### 📊 **Booking Management**
- Automated data collection
- Google Sheets integration
- Required field validation
- Complete address verification
- Booking confirmation messages

### 🧠 **Knowledge Base Integration**
- Answers service-related questions
- Provides plan recommendations
- Shares company information
- Handles FAQs automatically

---

## 🔄 How It Works

### Customer Experience

```
Customer: *Opens CleanHomes website*

Mike: Hey there! 👋 I'm Mike from CleanHomes. 
      How can I assist you today?

      [Book a House Cleaning Service] [Just Browsing] [Pricing & Plans]

Customer: *Clicks "Pricing & Plans"*

Mike: *Displays interactive pricing carousel*

Customer: *Selects "Deep Cleaning"*

Mike: Great choice! Our Deep Cleaning package includes:
      • Complete top-to-bottom clean
      • Kitchen & bathroom deep scrub
      • Window cleaning
      • Carpet vacuuming
      
      Any questions, or should we proceed with booking?

Customer: Let's book it!

Mike: Perfect! Let me get some details...
      What's your first name?

[Conversation continues collecting booking info]

Mike: ✅ All set! Your booking is confirmed.
      One of our representatives will call you shortly at [phone].
```

### Technical Flow

```
Customer Interaction
     ↓
Voiceflow Chatbot (Mike)
     ↓
Intent Recognition
     ↓
Flow Selection:
  ├─ Just Browsing → Knowledge Base Query
  ├─ Pricing & Plans → Display Carousel → Plan Details
  └─ Book Service → Collect Information
     ↓
Data Collection (if booking)
  ├─ First Name
  ├─ Last Name
  ├─ Phone Number
  ├─ Address
  └─ Preferred Date/Time
     ↓
Add to Sheet Tool (API Integration)
     ↓
Google Sheets Database
     ↓
Booking Confirmation
```

---

## 🏗️ System Architecture

### Frontend Layer

```
┌─────────────────────────────────────────────────────────────┐
│                    CLEANHOMES WEBSITE                        │
│                  (React + TypeScript)                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────┐            │
│  │         Voiceflow Widget Embed             │            │
│  │                                             │            │
│  │  • Chat Interface (Bottom-right)           │            │
│  │  • Voice Input Button                       │            │
│  │  • Minimizable Window                       │            │
│  │  • Mobile Responsive                        │            │
│  └────────────────────────────────────────────┘            │
│                                                              │
│  Navigation: Home | Services | Pricing | About | Contact   │
│  CTA Buttons: Book Now | View Pricing | Explore Services   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Voiceflow Layer

```
┌─────────────────────────────────────────────────────────────┐
│                      VOICEFLOW AGENT                         │
│                    (Mike - AI Assistant)                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │          CONVERSATION MANAGER                │          │
│  │  • Intent Recognition                        │          │
│  │  • Context Tracking                          │          │
│  │  • Response Generation                       │          │
│  │  • Flow Navigation                           │          │
│  └──────────────────────────────────────────────┘          │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │   FLOW 1     │  │   FLOW 2     │  │     FLOW 3      │  │
│  │   Browsing   │  │   Pricing    │  │    Booking      │  │
│  │              │  │              │  │                 │  │
│  │ • Service    │  │ • Carousel   │  │ • Collect Info  │  │
│  │   Info       │  │   Display    │  │ • Validation    │  │
│  │ • Package    │  │ • Plan       │  │ • Save Data     │  │
│  │   Selection  │  │   Details    │  │ • Confirmation  │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │          KNOWLEDGE BASE                      │          │
│  │  • Service Descriptions                      │          │
│  │  • Pricing Information                       │          │
│  │  • FAQs                                      │          │
│  │  • Company Policies                          │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### Backend Integration

```
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND SERVICES                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │        Add to Sheet API Tool                 │          │
│  │                                               │          │
│  │  Receives booking data from Voiceflow:       │          │
│  │  • Customer Name                             │          │
│  │  • Phone Number                              │          │
│  │  • Address                                   │          │
│  │  • Service Type                              │          │
│  │  • Preferred Date/Time                       │          │
│  │  • Timestamp                                 │          │
│  └───────────────────┬──────────────────────────┘          │
│                      │                                       │
│                      ↓                                       │
│  ┌──────────────────────────────────────────────┐          │
│  │           GOOGLE SHEETS DATABASE             │          │
│  │                                               │          │
│  │  Booking Records:                            │          │
│  │  [Timestamp | Name | Phone | Address |       │          │
│  │   Service | Date | Status]                   │          │
│  └──────────────────────────────────────────────┘          │
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │        NOTIFICATIONS (Optional)              │          │
│  │  • Email to admin                            │          │
│  │  • SMS to customer                           │          │
│  │  • CRM integration                           │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Chatbot Platform** | Voiceflow | Conversational AI design and deployment |
| **Frontend** | React + TypeScript | Website framework |
| **Styling** | Tailwind CSS | UI components and responsive design |
| **Voice/Text** | Voiceflow Widget | Embedded chat interface |
| **Knowledge Base** | Voiceflow KB | Service information and FAQs |
| **Data Storage** | Google Sheets | Booking database |
| **API Integration** | Custom API Tool | Add to Sheet functionality |
| **Hosting** | Vercel/Netlify | Website deployment |

---

## 📦 Prerequisites

### Required Accounts

| Service | Required? | Purpose | Cost |
|---------|-----------|---------|------|
| **Voiceflow** | ✅ Yes | Build and host chatbot | Free tier available |
| **Google Account** | ✅ Yes | Google Sheets for bookings | Free |
| **Vercel/Netlify** | ✅ Yes | Host React website | Free tier available |
| **Custom Domain** | ⚪ Optional | Professional branding | $10-15/year |

### Technical Requirements

- Voiceflow account (Pro recommended for advanced features)
- Google Sheets API access
- React + TypeScript development environment
- Modern web browser
- Text editor (VS Code recommended)

---

## 🚀 Installation

### Step 1: Set Up Voiceflow Agent

1. **Create Voiceflow Project**
   - Sign up at https://voiceflow.com/
   - Create new project: "CleanHomes Chatbot"
   - Select "Chat Assistant" template

2. **Import Agent Configuration**
   - Use the provided prompt as system instructions
   - Set agent name: "Mike"
   - Set agent role: "Customer Support Agent"

3. **Configure Personality**
   - Tone: Friendly, concise, clear
   - Style: Conversational, helpful
   - Language: Simple, everyday language

---

### Step 2: Build Conversation Flows

#### Introduction Flow

1. Create **Start Block**
2. Add **Text Response**:
   ```
   Hey there! 👋 I'm Mike from CleanHomes. How can I assist you today?
   ```
3. Add **Button Block**:
   - Book a House Cleaning Service
   - Just Browsing
   - Pricing & Plans

---

#### Just Browsing Flow

1. Create **Browsing Intent Handler**
2. Add **Text Response**:
   ```
   I'd love to help you out! What are you interested in?
   ```
3. Add **Buttons**:
   - Learn about our services
   - Help me choose a plan
   - I have specific questions
   - Something else

4. **Branch Logic**:
   - Services → Knowledge Base query
   - Choose Plan → Ask 2-3 qualification questions
   - Questions → Open-ended KB search
   - Other → Listen and resolve

---

#### Pricing & Plans Flow

1. Create **Pricing Intent Handler**
2. Add **Carousel Component**:
   - Standard Cleaning
   - Deep Cleaning
   - Move-In/Move-Out Cleaning
   - Recurring Cleaning

3. Create **Variable**: `{Plan_Selected}`
4. Add **Condition Block**: Check if plan selected
5. Add **Text Response** with plan details
6. Add **Buttons**:
   - Book this service
   - Ask a question
   - See other plans

---

#### Booking Flow

1. Create **Booking Intent Handler**
2. **Service Selection**:
   - Display service buttons
   - Save to `{selected_service}`

3. **Capture Block: First Name**
   ```
   Great! What's your first name?
   ```
   - Save to `{first_name}`

4. **Capture Block: Last Name**
   ```
   And your last name?
   ```
   - Save to `{last_name}`

5. **Capture Block: Phone**
   ```
   What's the best number to reach you?
   ```
   - Save to `{phone_number}`
   - Add validation regex

6. **Capture Block: Address**
   ```
   What's your complete address? (Include street, city, state, zip)
   ```
   - Save to `{address}`
   - Validate completeness

7. **Capture Block: Date/Time**
   ```
   When would you prefer your cleaning? (Date and time)
   ```
   - Save to `{preferred_datetime}`

8. **API Call: Add to Sheet**
   - Use custom API tool
   - Send all collected variables
   - Wait for success response

9. **Confirmation Message**:
   ```
   ✅ All set! Your booking is confirmed.
   
   One of our representatives will call you shortly to finalize the details.
   
   Booking Details:
   • Service: {selected_service}
   • Name: {first_name} {last_name}
   • Phone: {phone_number}
   • Date: {preferred_datetime}
   ```

---

### Step 3: Set Up Knowledge Base

1. **Navigate to Knowledge Base** in Voiceflow
2. **Add Documents**:
   - Service descriptions
   - Pricing information
   - Package details
   - FAQs
   - Company policies

3. **Example KB Entries**:

**Standard Cleaning**
```
Our Standard Cleaning includes:
- Dusting all surfaces
- Vacuuming and mopping floors
- Kitchen cleaning (counters, sink, appliances)
- Bathroom cleaning (toilet, shower, sink)
- Trash removal
- General tidying

Duration: 2-3 hours
Pricing: Starting at $99
```

**Deep Cleaning**
```
Our Deep Cleaning provides a thorough, detailed clean:
- Everything in Standard Cleaning, plus:
- Baseboards and window sills
- Interior window cleaning
- Detailed kitchen scrub (inside appliances, cabinets)
- Grout cleaning in bathrooms
- Carpet shampooing
- Wall spot cleaning

Duration: 4-6 hours
Pricing: Starting at $199
```

---

### Step 4: Create Add to Sheet API Tool

1. **Set Up Google Sheets**:
   - Create new sheet: "CleanHomes Bookings"
   - Add headers:
     ```
     Timestamp | First Name | Last Name | Phone | Address | Service | Preferred Date/Time | Status
     ```

2. **Create API Endpoint** (using n8n, Zapier, or custom):

**Option A: Using n8n**
- Create webhook trigger
- Add Google Sheets node
- Map incoming data to sheet columns
- Return success response

**Option B: Using Google Apps Script**
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.first_name,
    data.last_name,
    data.phone_number,
    data.address,
    data.selected_service,
    data.preferred_datetime,
    'Pending'
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'Booking saved'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Add Tool to Voiceflow**:
   - Go to Tools section
   - Add "API" tool
   - Name: "Add to Sheet"
   - Method: POST
   - URL: Your endpoint URL
   - Body: JSON with all variables
   - Headers: Content-Type: application/json

---

### Step 5: Integrate with React Website

1. **Get Voiceflow Embed Code**:
   - In Voiceflow, go to "Publish"
   - Copy the widget embed code

2. **Add to React App**:

**In `public/index.html`** (before `</body>`):
```html
<script type="text/javascript">
  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: 'YOUR_PROJECT_ID' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        launch: {
          event: {
            type: 'launch'
          }
        }
      });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
    v.type = "text/javascript"; 
    s.parentNode.insertBefore(v, s);
  })(document, 'script');
</script>
```

3. **Add TypeScript Declarations** (`src/types/voiceflow.d.ts`):
```typescript
interface Window {
  voiceflow: {
    chat: {
      load: (config: VoiceflowConfig) => void;
      open: () => void;
      close: () => void;
    };
  };
}

interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
  launch?: {
    event: {
      type: string;
    };
  };
}
```

4. **Create Chat Trigger Component** (`src/components/ChatTrigger.tsx`):
```typescript
import React from 'react';

export const ChatTrigger: React.FC = () => {
  const openChat = () => {
    if (window.voiceflow?.chat) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 bg-blue-600 text-white 
                 rounded-full p-4 shadow-lg hover:bg-blue-700 
                 transition-all z-50"
      aria-label="Open chat"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 
                 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 
                 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 
                 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 
                 1 0 100-2h-3z" />
      </svg>
    </button>
  );
};
```

5. **Add to Main App**:
```typescript
import { ChatTrigger } from './components/ChatTrigger';

function App() {
  return (
    <div className="App">
      {/* Your existing components */}
      <ChatTrigger />
    </div>
  );
}
```

---

## ⚙️ Configuration

### Voiceflow Settings

**Agent Settings:**
```
Name: Mike
Role: Customer Support Agent for CleanHomes
Tone: Friendly, concise, clear
Temperature: 0.7 (balanced creativity)
Max Tokens: 150 (concise responses)
```

**Knowledge Base Settings:**
```
Search Mode: Semantic
Max Results: 3
Relevance Threshold: 0.7
```

**Response Format:**
```
Use markdown: Yes
Allow emojis: Yes
Use buttons: Yes
Enable carousels: Yes
```

---

### Customization Options

**Brand Colors:**
Update in Voiceflow appearance settings:
```css
Primary Color: #2563eb (Blue)
Secondary Color: #10b981 (Green)
Background: #ffffff (White)
Text: #1f2937 (Dark Gray)
```

**Chat Widget Position:**
```javascript
position: 'bottom-right', // or 'bottom-left'
offset: { x: '20px', y: '20px' }
```

**Launch Behavior:**
```javascript
autoOpen: false, // Set to true for auto-open
delay: 3000, // Delay before auto-open (ms)
```

---

## 📖 Conversation Flows

### Flow 1: Just Browsing

```
Mike: I'd love to help you out! What are you interested in?

[Learn about services] [Choose a plan] [Have questions] [Something else]

→ If "Learn about services":
  Mike: We offer professional cleaning services including:
        • Standard Cleaning - Regular maintenance
        • Deep Cleaning - Thorough detailed clean
        • Move-In/Move-Out - Complete property clean
        • Recurring Cleaning - Weekly or monthly plans
        
        Which service interests you most?

→ If "Choose a plan":
  Mike: I can help with that! Let me ask you a few questions:
        
        1. How often do you need cleaning?
           [One-time] [Weekly] [Bi-weekly] [Monthly]
        
        2. What's the size of your home?
           [Studio/1BR] [2-3BR] [4+ BR]
        
        3. Do you need any special services?
           [Deep clean] [Windows] [Carpets] [Just standard]

  Mike: Based on your needs, I'd recommend our [Package Name]!
        This includes [details]. Should we proceed with booking?
```

---

### Flow 2: Pricing & Plans

```
Mike: Here are our cleaning packages:

[Displays Carousel with 4 cards]

Card 1: Standard Cleaning - $99+
Card 2: Deep Cleaning - $199+
Card 3: Move-In/Move-Out - $249+
Card 4: Recurring Cleaning - Custom pricing

Customer: [Selects Deep Cleaning]

Mike: Great choice! Our **Deep Cleaning** package includes:
      
      ✨ **What's Included:**
      • Everything in standard cleaning
      • Baseboards and window sills
      • Interior window cleaning
      • Inside appliances and cabinets
      • Grout cleaning
      • Carpet shampooing
      
      💰 **Starting at $199** (varies by home size)
      ⏱️ **4-6 hours** duration
      
      Any questions, or ready to book?

[Book this service] [Ask a question] [See other plans]
```

---

### Flow 3: Booking Service

```
Mike: Perfect! Let's get you scheduled. 
      Which service would you like to book?

[Standard] [Deep Clean] [Move-In/Out] [Recurring]

Customer: Deep Clean

Mike: Excellent choice! What's your first name?

Customer: Sarah

Mike: Nice to meet you, Sarah! And your last name?

Customer: Johnson

Mike: Thanks! What's the best number to reach you?

Customer: 555-0123

Mike: Got it. What's your complete address?
      *Please include street, city, state, and zip code.*

Customer: 123 Main St, Springfield, IL 62701

Mike: Perfect! When would you prefer your cleaning?
      *Let me know your preferred date and time.*

Customer: Next Friday at 10 AM

Mike: ✅ **All set, Sarah!** Your booking is confirmed.

      **Booking Details:**
      • **Service:** Deep Cleaning
      • **Name:** Sarah Johnson
      • **Phone:** 555-0123
      • **Address:** 123 Main St, Springfield, IL 62701
      • **Date/Time:** Next Friday at 10 AM
      
      One of our representatives will call you shortly to confirm
      the details and answer any questions you might have!
      
      Is there anything else I can help you with?
```

---

## 🌐 Website Integration

### Homepage Integration

**Add prominent CTA buttons** that trigger chatbot:

```typescript
<button 
  onClick={() => window.voiceflow.chat.open()}
  className="bg-green-500 hover:bg-green-600 text-white 
             px-8 py-3 rounded-lg font-semibold"
>
  Book Now
</button>

<button 
  onClick={() => window.voiceflow.chat.open()}
  className="bg-blue-500 hover:bg-blue-600 text-white 
             px-8 py-3 rounded-lg font-semibold"
>
  View Pricing
</button>
```

---

### Pricing Page Integration

**Auto-open chat with context:**

```typescript
useEffect(() => {
  // Open chat when user lands on pricing page
  const timer = setTimeout(() => {
    if (window.voiceflow?.chat) {
      window.voiceflow.chat.open();
      // Optionally send a message
      window.voiceflow.chat.interact({
        type: 'text',
        payload: 'Pricing & Plans'
      });
    }
  }, 2000);
  
  return () => clearTimeout(timer);
}, []);
```

---

### Mobile Optimization

**Ensure responsive design:**

```css
/* Chat widget adjustments for mobile */
@media (max-width: 768px) {
  #voiceflow-chat {
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
    bottom: 0 !important;
    right: 0 !important;
  }
}
```

---

## 🎨 Customization

### Personalizing Mike's Responses

**Update in Voiceflow System Prompt:**

```
Additional personality traits:
- Use customer's name frequently
- Include relevant emojis (✨ 🏠 ✅ 📅)
- Add enthusiasm for bookings
- Show empathy for customer concerns
- Provide pro tips when relevant
```

**Example response modification:**
```
Standard: "Your booking is confirmed."

Personalized: "✅ All set, [Name]! Your booking is confirmed. 
               Our team is excited to make your home sparkle! ✨"
```

---

### Adding New Services

1. Update Knowledge Base with service details
2. Add button option in booking flow
3. Update pricing carousel with new card
4. Update Google Sheets columns if needed

---

### Customizing Button Labels

In Voiceflow, edit button blocks:

```
Default: "Book a House Cleaning Service"
Custom: "Schedule My Cleaning" or "Get Started"

Default: "Just Browsing"
Custom: "Tell Me More" or "Learn About Services"

Default: "Pricing & Plans"
Custom: "See Packages" or "View Pricing"
```

---

## 🐛 Troubleshooting

### Issue: Chat Widget Not Loading

**Symptoms:** Widget doesn't appear on website

**Solutions:**
1. Verify Voiceflow project ID is correct
2. Check browser console for errors
3. Ensure script is loaded before `</body>`
4. Test in incognito mode (cache issues)
5. Verify Voiceflow project is published

---

### Issue: Booking Data Not Saving

**Symptoms:** Confirmation shown but no data in sheets

**Solutions:**
1. Test API endpoint independently (Postman)
2. Check Google Sheets permissions
3. Verify API tool configuration in Voiceflow
4. Review API response in Voiceflow logs
5. Check variable names match exactly
6. Ensure all required fields are captured

---

### Issue: Knowledge Base Not Responding

**Symptoms:** Generic responses, no specific information

**Solutions:**
1. Verify KB is populated with content
2. Check relevance threshold (lower if needed)
3. Rephrase KB entries for better matching
3. Test queries in Voiceflow KB tester
4. Increase max results returned

---

### Issue: Voice Input Not Working

**Symptoms:** Microphone button doesn't work

**Solutions:**
1. Check browser microphone permissions
2. Test on HTTPS website (required for mic)
3. Try different browser (Chrome recommended)
4. Verify Voiceflow plan supports voice
5. Check device microphone settings

---

### Issue: Carousel Not Displaying

**Symptoms:** Pricing carousel doesn't show

**Solutions:**
1. Verify carousel block is properly configured
2. Check all cards have required fields
3. Test in Voiceflow preview mode
4. Ensure website widget version supports carousels
5. Try text fallback if issue persists

---

## 💡 Best Practices

### Conversation Design

**Keep it natural:**
- Use contractions (I'm, you're, let's)
- Vary responses slightly
- Acknowledge and validate inputs
- Provide clear next steps

**Be efficient:**
- Limit to 2-3 sentences per response
- Use buttons for common choices
- Skip unnecessary questions
- Confirm before moving forward

**Handle errors gracefully:**
```
Instead of: "Invalid input"
Use: "I didn't quite catch that. Could you provide your 
      phone number in this format: 555-1234?"
```

---

### Data Collection

**Field validation:**
- Phone: Accept various formats
- Address: Require street, city, state, zip
- Date: Accept natural language
- Name: Allow hyphens, apostrophes

**User experience:**
- One question at a time
- Show progress if multi-step
- Allow editing previous answers
- Confirm before submission

---

### Knowledge Base Management

**Organization:**
- Group similar topics
- Use clear, simple language
- Include variations of questions
- Update regularly with FAQs

**Content quality:**
- Be specific and accurate
- Include pricing when relevant
- Provide actionable information
- Link to website pages if needed

---

### Performance Optimization

**Response time:**
- Keep API calls minimal
- Use caching where possible
- Optimize KB queries
- Test under load

**User engagement:**
- Auto-open for first-time visitors
- Add subtle notification dot
- Use welcome message
- Suggest common actions

---

## 💰 Cost Breakdown

### Monthly Costs

| Service | Plan | Cost |
|---------|------|------|
| **Voiceflow** | Pro | $50/month |
| **Google Sheets** | Free | $0 |
| **Hosting (Vercel)** | Hobby | Free |
| **Custom Domain** | Annual | ~$1/month |
| **Total** | Per month | **~$51** |

**Note:** Voiceflow has a free tier (limited messages) suitable for testing.

---

### Per Conversation Cost

**Voiceflow Pro:**
- Unlimited conversations
- Unlimited messages
- Advanced features included
- **Effective cost per booking:** $0 (flat rate)

---

## 📈 Use Cases

### 1. Lead Qualification

**Before booking, qualify leads:**
- Identify service needs
- Assess urgency
- Determine budget fit
- Collect contact info

### 2. 24/7 Customer Support

**Handle common questions:**
- Service descriptions
- Pricing inquiries
- Availability checks
- Policy clarifications

### 3. Appointment Scheduling

**Automate booking process:**
- Collect all necessary info
- Confirm availability (with integration)
- Send confirmations
- Reduce no-shows

### 4. Upselling & Cross-selling

**Suggest additional services:**
- Add-ons during booking
- Recurring plans
- Premium packages
- Seasonal specials

### 5. Customer Retention

**Stay connected:**
- Follow-up reminders
- Service feedback
- Loyalty program info
- Re-booking prompts

---

## 📄 License

This project is licensed under the **MIT License**.

✅ Commercial use allowed  
✅ Modification allowed  
✅ Distribution allowed  
✅ Private use allowed  
⚠️ No warranty or liability

---

## 🌟 Acknowledgments

Built with powerful tools:

- [Voiceflow](https://voiceflow.com) - Conversational AI platform
- [React](https://react.dev) - Frontend framework
- [TypeScript](https://typescriptlang.org) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Google Sheets](https://sheets.google.com) - Data storage

---

## 🚀 Future Enhancements

### Planned Features

- [ ] Calendar integration (Google Calendar sync)
- [ ] Real-time availability checking
- [ ] Automated follow-up messages
- [ ] Customer portal for booking management
- [ ] Payment processing integration
- [ ] Review/feedback collection
- [ ] Multi-language support
- [ ] SMS notifications
- [ ] Email confirmations
- [ ] CRM integration (HubSpot, Salesforce)
- [ ] Analytics dashboard
- [ ] A/B testing for responses

---

## 📞 Support

**For technical issues:**
- Voiceflow: https://support.voiceflow.com/
- React: https://react.dev/community

**For business inquiries:**
- CleanHomes: +1 8
- Website: www.cleanhomes.com

---

**Made with 🏠 for CleanHomes**

⭐ Converting visitors into happy customers!

💬 Mike is ready to help 24/7!

✨ Making homes shine, one conversation at a time!

---
