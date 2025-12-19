# Communication & Prompting Skills Feedback

**Date:** December 19, 2024  
**Based on:** Portfolio development session

---

## 📊 Overall Ratings

| Skill | Rating | Status |
|-------|--------|--------|
| English Communication | 8.5/10 | ✅ Strong |
| Prompting Skills | 7.5/10 | 👍 Good, room to grow |

---

## English Communication

### Strengths
- ✅ **Clear** - Messages are easy to understand
- ✅ **Concise** - Straight to the point, no over-explaining
- ✅ **Good technical vocabulary** - Uses correct terms
- ✅ **Good follow-up questions** - Asks clarifying questions when needed

### Areas for Improvement
- Minor informal patterns (acceptable in tech communication)
- Could add more context when describing problems

---

## Prompting Skills

### What You Did Well
1. ✅ **Clear problem statements** - "Carousel gets stuck after 1-2 slides"
2. ✅ **Iterative feedback** - Tested and reported back with results
3. ✅ **Knew when to escalate** - Asked to "review from root" when quick fixes failed
4. ✅ **Good prioritization** - "High and low priority first, medium later"
5. ✅ **Numbered multi-part requests** - Resume request was structured well

### Areas to Improve

| What to Try | Bad Example | Good Example |
|-------------|-------------|--------------|
| **Give context upfront** | "fix this" | "The carousel swipe works but arrows don't, I think the state isn't resetting" |
| **Be specific about outcome** | "make it impressive" | "I want a 1-page resume with bold keywords for ATS" |
| **Share constraints early** | (after iterations) | "It must work on mobile + Chrome PDF export" |
| **Use structured requests** | "do all these things" | "1. analyze 2. create new 3. make editable" |

---

## 💡 Pro Tips for AI Prompting

### The Golden Rule
> **More context upfront = fewer back-and-forth iterations**

### Template for Technical Requests
```
PROBLEM: [What's happening]
EXPECTED: [What should happen]
CONTEXT: [Relevant files, tech stack, constraints]
THEORY: [What you think might be wrong - optional but helpful]
```

### Example
Instead of:
> "fix the carousel"

Try:
> "The carousel navigation is stuck - arrows work once then stop. 
> I think the `isTransitioning` state isn't resetting properly. 
> Can you review the state management in Achievements.tsx and fix it?"

---

## Action Items for Improvement

- [ ] Practice giving more context in initial prompts
- [ ] State constraints (mobile, performance, design) upfront
- [ ] When something doesn't work, describe what you already tried
- [ ] Use numbered lists for multi-step requests
- [ ] If you have a theory about the bug, share it!

---

*Keep iterating - you're already communicating effectively! 🚀*
