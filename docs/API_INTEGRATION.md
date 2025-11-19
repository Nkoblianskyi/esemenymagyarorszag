# API Integration Guide for EntradasEnEspaña

## Overview

This document outlines how to integrate real partner APIs into the ticket aggregator platform.

## Architecture

The platform uses a **facade pattern** to abstract partner-specific APIs behind a unified interface:

\`\`\`
User Request → TicketAggregatorAPI → Partner APIs (StubHub, Viagogo, etc.)
                                   ↓
                            Normalized Response
\`\`\`

## Current Implementation

Currently using **mock data** in `lib/mock-data.ts` for development and testing.

## Partner API Integration Steps

### 1. StubHub Integration

**API Documentation:** https://developer.stubhub.com/

**Required:**
- API Key
- OAuth 2.0 authentication
- Rate limiting: 5 requests/second

**Implementation:**
\`\`\`typescript
// lib/partners/stubhub.ts
export class StubHubClient {
  async searchEvents(query: string) {
    // API call implementation
  }
  
  async getInventory(eventId: string) {
    // API call implementation
  }
}
\`\`\`

### 2. Viagogo Integration

**API Documentation:** Contact Viagogo for API access

**Required:**
- Partner agreement
- API credentials
- Webhook setup for real-time updates

### 3. Ticketmaster Integration

**API Documentation:** https://developer.ticketmaster.com/

**Required:**
- API Key (free tier available)
- Rate limiting: 5000 requests/day

### Data Normalization

All partner responses must be normalized to our `TicketOffer` interface:

\`\`\`typescript
{
  id: string
  eventId: number
  partner: Partner
  section: string
  price: number
  faceValue: number
  // ... other fields
}
\`\`\`

## Environment Variables

Add to your Vercel project:

\`\`\`env
STUBHUB_API_KEY=your_key_here
STUBHUB_API_SECRET=your_secret_here
VIAGOGO_API_KEY=your_key_here
TICKETMASTER_API_KEY=your_key_here
\`\`\`

## Caching Strategy

To reduce API calls and improve performance:

1. **Redis caching** for event data (TTL: 5 minutes)
2. **Price updates** every 2-5 minutes
3. **Event metadata** cached for 1 hour

## Legal Requirements

⚠️ **IMPORTANT:** Each partner has specific terms of service:

1. **Display Requirements:** Must show partner name and logo
2. **Price Transparency:** Must show face value when available
3. **Redirect Notice:** Must inform users they're leaving the platform
4. **No Direct Sales:** Cannot sell tickets directly

## Testing

Use the mock API client for development:

\`\`\`typescript
import { TicketAggregatorAPI } from '@/lib/api-client'

const events = await TicketAggregatorAPI.searchEvents({ city: 'Madrid' })
\`\`\`

## Production Checklist

- [ ] Obtain API keys from all partners
- [ ] Set up rate limiting
- [ ] Implement caching layer
- [ ] Add error handling and retry logic
- [ ] Set up monitoring and alerts
- [ ] Test all partner integrations
- [ ] Review legal compliance
- [ ] Add disclaimer on all pages

## Support

For API integration issues, contact:
- StubHub: developer@stubhub.com
- Ticketmaster: developer@ticketmaster.com
