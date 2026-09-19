document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('nav.top');
  if(!nav)return;
  const button=document.createElement('button');
  button.className='menu-toggle';
  button.type='button';
  button.setAttribute('aria-label','Open navigation');
  button.setAttribute('aria-expanded','false');
  button.textContent='☰';
  const logo=nav.querySelector('.logo');
  logo ? logo.after(button) : nav.prepend(button);
  button.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    button.textContent=open?'×':'☰';
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
});
