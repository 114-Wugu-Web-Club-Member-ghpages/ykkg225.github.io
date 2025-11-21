# Design Guidelines: 二次元 Anime-Style Chat Website

## Design Approach: Reference-Based (Anime/Discord Hybrid)

**Primary Inspiration**: Discord's chat interface structure + Anime visual aesthetic (vibrant pastels, gradients, playful elements)

**Key Principles**:
- Playful, energetic atmosphere with rounded corners throughout
- Gradient-rich backgrounds and accents
- Clean, fun typography with high readability
- Soft shadows and glow effects for depth

---

## Typography System

**Font Stack**:
- Primary: 'Noto Sans TC', 'PingFang TC' (supports Traditional Chinese)
- Display/Headers: Rounded sans-serif variant or playful weight
- Code/Timestamps: Monospace for system messages

**Hierarchy**:
- Chat messages: text-base (16px)
- Usernames: text-sm font-semibold
- Timestamps: text-xs opacity-70
- Input placeholder: text-sm
- Page title/header: text-2xl font-bold

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 3, 4, 6, and 8
- Component padding: p-4 or p-6
- Message spacing: space-y-3
- Container gaps: gap-4
- Section margins: mt-6, mb-8

**Layout Structure**:
```
┌─────────────────────────────┐
│  Header (h-16)              │
├─────────────────────────────┤
│                             │
│  Chat Area (flex-1)         │
│  - Messages scroll          │
│  - Auto-scroll to bottom    │
│                             │
├─────────────────────────────┤
│  Input Bar (h-20)           │
└─────────────────────────────┘
```

**Container**: max-w-4xl mx-auto for desktop focus

---

## Component Library

### 1. Header Bar
- Fixed top position (sticky top-0)
- Gradient background with soft blur (backdrop-blur-sm)
- Contains: Logo/title, online user count badge, username display
- Height: h-16, padding: px-6

### 2. Chat Message Bubbles
**Own Messages** (right-aligned):
- ml-auto max-w-md
- Rounded corners: rounded-2xl rounded-br-sm
- Padding: px-4 py-3
- Shadow: shadow-md

**Other Messages** (left-aligned):
- mr-auto max-w-md
- Avatar circle on left (w-10 h-10 rounded-full)
- Username above message (text-sm font-semibold mb-1)
- Rounded corners: rounded-2xl rounded-bl-sm

### 3. Message Input Area
- Fixed bottom: sticky bottom-0
- Container: px-4 py-3
- Input field: rounded-full with large padding (px-6 py-4)
- Send button: Circular (w-12 h-12 rounded-full) with icon
- Gradient background with backdrop blur

### 4. System Messages
- Centered text (text-center)
- Small, italic style (text-xs italic opacity-60)
- Margin: my-4
- Examples: "XXX joined", "XXX left"

### 5. Username Setup Modal (Initial)
- Centered overlay (fixed inset-0 with flex justify-center items-center)
- Card: max-w-sm rounded-3xl shadow-2xl p-8
- Input: rounded-full px-6 py-3
- Button: rounded-full px-8 py-3 font-semibold

### 6. Online Users Badge
- Pill shape (rounded-full)
- Small size: px-3 py-1 text-xs
- Pulsing animation on count change

---

## Visual Style Elements

**Borders**: Minimal - rely on shadows and backgrounds for separation

**Corners**: Generous rounding
- Cards/containers: rounded-2xl to rounded-3xl
- Buttons/inputs: rounded-full
- Message bubbles: rounded-2xl with one sharp corner (for speech bubble effect)

**Shadows**:
- Elevated elements: shadow-lg
- Interactive hover: shadow-xl
- Messages: shadow-md
- Subtle depth: shadow-sm

**Gradients**: Apply liberally
- Header background
- Message input area background
- Own message bubbles
- Page background (subtle, large-scale)

**Icons**: Use Heroicons (outline style for most, solid for active states)
- Send icon: Paper airplane
- User icon: User circle
- Online indicator: Green dot

---

## Responsive Behavior

**Mobile** (default):
- Full width messages
- Simplified header (smaller text)
- Input bar auto-expands on focus

**Desktop** (md: and up):
- Centered container (max-w-4xl)
- Wider message bubbles (max-w-md)
- More generous spacing

---

## Animations

**Minimal, Purposeful Only**:
1. New message: Slide-in from bottom (translate-y-4 to translate-y-0)
2. Send button: Scale pulse on click
3. Typing indicator: Three bouncing dots
4. Online badge: Subtle pulse when count changes

**Transition classes**: transition-all duration-300 ease-out

---

## Accessibility

- Focus rings on all interactive elements
- High contrast between text and backgrounds
- Keyboard navigation: Enter to send, Tab to navigate
- ARIA labels on icon-only buttons
- Screen reader announcements for new messages

---

## Images

**No hero images required** - this is a functional chat application. Visual interest comes from:
- Gradient backgrounds
- User avatars (generated or uploaded - circular w-10 h-10)
- Optional: Cute anime-style decorative icons/stickers in empty state

**Empty State**: When no messages, show centered illustration placeholder with friendly text like "開始聊天吧！" with a cute graphic suggestion.