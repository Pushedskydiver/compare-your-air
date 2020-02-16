import { createGlobalStyle } from 'styled-components';
import { colors } from './colors.styles';
import { typography } from './typography.styles';
import spacing from './spacing.styles';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-alpha: ${colors.core.alpha};
    --background-beta: ${colors.core.beta};
    --foreground-dark: ${colors.dark};
    --foreground-light: ${colors.light};
    --font: ${typography.family};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    color: inherit;
    font-weight: normal;
  }

  html,
  body {
    position: relative;
    min-height: 100%;
  }

  html {
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background: linear-gradient(135deg, var(--background-alpha) 0%,var(--background-beta) 100%);
    color: var(--foreground-light);
    font-family: var(--font);
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body ::-moz-selection {
    background: var(--foreground-dark);
    color: var(--foreground-light);
  }

  body ::selection {
    background: var(--foreground-dark);
    color: var(--foreground-light);
  }

  h1 {
    font-family: inherit;
    font-size: ${typography.heading.size.big};
    font-weight: 600;
    line-height: 1.3;
    margin: 0px 0px 18px;
  }

  h1,
  h2 {
    margin-top: 0;
    margin-bottom: ${spacing.margin}px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  strong {
    font-weight: bold;
  }

  input {
    font-family: inherit;
    appearance: none;
  }
`;

export default GlobalStyles;
