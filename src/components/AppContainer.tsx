import StyledComponentsRegistry from '@/lib/registry'
import { RecoilRoot, } from 'recoil';

interface Props {
  children: React.ReactNode
}

const AppContainer: React.FC<Props> = ({ children }) => {

  return (
    <>
      <StyledComponentsRegistry>
      <RecoilRoot>
        {children}
      </RecoilRoot>
      </StyledComponentsRegistry>
    </>
  )
}

export default AppContainer
