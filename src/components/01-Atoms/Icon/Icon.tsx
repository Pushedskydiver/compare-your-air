import React from 'react';
import IconStyles from './Icon.styles';

export function Search() {
  return (
    <IconStyles search xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zm6 0l4.969 4.969-1.5 1.5-4.969-4.969v-.797l-.281-.281c-1.125.984-2.625 1.547-4.219 1.547C5.907 15.985 3 13.126 3 9.516S5.906 3 9.516 3s6.469 2.906 6.469 6.516c0 1.594-.563 3.094-1.547 4.219l.281.281h.797z" /></IconStyles>
  );
}

export function Close() {
  return (
    <IconStyles close xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z" /></IconStyles>
  );
}
