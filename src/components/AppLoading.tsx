import styled from "styled-components"

interface Props {
}
const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #615e5eb8;

  z-index: 100;
`
const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  color: red;
  font-size: 100px;
`

const AppLoading: React.FC<Props> = () => {

  return (
    <Wrap>
      <Loading>
        Loading...
      </Loading>
    </Wrap>
  )
}

export default AppLoading
