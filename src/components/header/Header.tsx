import { LogoAndShiftButton } from "./LogoAndShiftButton";
import StepProgress from "./StepProgress";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-10 py-6">
      <LogoAndShiftButton />
      <StepProgress />
    </header>
  );
};

export default Header;
