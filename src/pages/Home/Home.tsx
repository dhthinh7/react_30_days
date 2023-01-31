import styled from "styled-components";
import CardItemNav from "../../Component/Common/CartItemNav";
import Pokemon from '../../asset/nav/pokemon.png';
import UploadFile from '../../asset/nav/UploadFile.png';
import MultiStepForm from '../../asset/nav/multiStepForm.png';

type Props = {};

export default function Home({ }: Props) {
  return <NavWrapper className="container">
    <h1>List project using react typescript</h1>
    <div className="content">
      <CardItemNav title="Pokemon" image={Pokemon} path="pokemon" />
      <CardItemNav title="Upload File" image={UploadFile} path="uploadfile" />
      <CardItemNav title="Multi Step Form" image={MultiStepForm} path="multi-step-form" />
    </div>
  </NavWrapper>;
}

const NavWrapper = styled.div`
  h1 {
    color: red;
    text-align: center;
    margin: 2rem;
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
  }
`