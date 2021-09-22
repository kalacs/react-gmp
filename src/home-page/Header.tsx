import { HeaderTopWrapper } from './HeaderTop';
import { Search } from "./Search";
import { HeaderWrapper } from "./HeaderWrapper";

export const HomePageHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderTopWrapper />
      <Search />
    </HeaderWrapper>
  );
};
