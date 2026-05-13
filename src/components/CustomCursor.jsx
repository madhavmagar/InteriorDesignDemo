import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const onMouseEnterInteractive = () => document.body.classList.add('cursor-hover');
    const onMouseLeaveInteractive = () => document.body.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animateFollower);

    const interactives = document.querySelectorAll('a, button, [role="button"], .portfolio-item, .service-card, .filter-tab, .testimonial-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    // Observe new DOM changes
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"], .portfolio-item, .service-card, .filter-tab, .testimonial-card').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <div id="cursor-follower" ref={followerRef} />
    </>
  );
}
