export default (callback, el, deadzone = 0) =>
{
  const listener = () =>
  {
    const bbox = el.getBoundingClientRect()
    const screen_height = window.innerHeight

    if (
      (bbox.top >= deadzone && bbox.top <= (window.innerHeight - deadzone)) ||
      (bbox.bottom >= deadzone && bbox.bottom <= (window.innerHeight - deadzone))
    )
    {
      document.removeEventListener('scroll', listener)
      callback()
      console.log('callbacked', screen_height, bbox.top, bbox.bottom, el.dataset.index)
    }

  }

  document.addEventListener('scroll', listener)
  listener()
}
