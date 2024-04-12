import { useColorMode } from 'theme-ui';
import colors from '../gatsby-plugin-theme-ui/colors';

const customColors = Object.keys(colors.modes);
const modes = ['light', ...customColors];

function useCycleColor() {
  const [colorMode, setColorMode] = useColorMode();

  const cycleColorMode = () => {
    const i = modes.indexOf(colorMode) + 1;
    const n = (i) % modes.length;
    setColorMode(modes[n]);
  };
  return { cycleColorMode };
}

export default useCycleColor;
