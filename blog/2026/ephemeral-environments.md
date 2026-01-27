---
    authors: [acosoft]
    tags: [timeoff]
---

# Ephemeral environments


I started with a simple idea: "Allow any user to register and experiment with the TimeOFF workflow." Here are the key questions I considered while implementing this:


### How many servers do I need?

I could start a new server for every user, which would be infinitely scalable. However, if a bot bypasses security and triggers thousands of trial environments, it could become unmanageable. That's why I decided to limit each user to a 60-minute session and run everything on a single server.

- With a 60-minute limit, each user effectively gets a time slot on the server
- The server can easily run one environment at a time
- No need for horizontal scaling, which makes setup simple


### How can I prevent bots from registering?

This part is straightforward. I can use reCAPTCHA or Cloudflare Turnstile. I don't like these solutions, but they do prevent spam. Users may not like them either, but they've learned to live with it.



### How do I allow users to select time slots?

I could automatically assign the next free slot to each user, but what if the user isn't available at that time? That would waste a slot that could have gone to someone else. That's when I came up with an out-of-the-box solution: using Calendly.com.

This approach appealed to me because it avoids the need for reCAPTCHA or Cloudflare Turnstile.


## Discovery

The basic Calendly.com subscription doesn't support webhooks, so you can't send messages to other systems without paying for a premium plan. As an alternative, I found cal.com, which offers webhooks even in their basic subscription. I could have tried to read incoming emails from Calendly.com, but that seemed too hacky, so I skipped it.

With cal.com, I was able to set up meetings and let users schedule a time to test the environment.


## Out of the box

### Using cal.com to schedule 60-minute trial environments

The user isn't actually booking a meeting with a salesperson, but reserving a 60-minute trial environment. Here are my thoughts behind this unusual approach:

- cal.com likely has strong bot prevention, which helps avoid fake registrations
- Only one user can book a time slot at once
- I can run everything on a single server
- I can listen to the `BOOKING_CREATED` event and send custom data needed to set up the environment


### Downsides

cal.com offers limited customization of the booking process with a free account, but I was able to make it look good enough to prove the concept works. With the free plan, I couldn't create a meeting page that allows multiple registrations for the same meeting, so I couldn't run multiple environments at the same time.


## End result

Here's how everything works in the background:

- User visits https://timeoff.barufa.com
- After clicking "Book your free trial", cal.com shows available time slots
- cal.com sends a `BOOKING_CREATED` event to an n8n workflow
- The n8n workflow stores meeting data and prepares everything for the environment
- At the scheduled time, n8n triggers a GitHub Action to create a new environment
- A wait node is triggered, waiting for 60 minutes
- The last node in the workflow then triggers a GitHub Action to delete the environment

From a UI/UX perspective, this isn't the most intuitive way to do things, but I wanted to experiment with workflows and see where it would lead. I find the end result quite interesting. It was fun to experiment and learn throughout this process.






