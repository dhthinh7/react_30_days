import { Link } from 'react-router-dom';
import styled from 'styled-components';


export interface ICardItemNavProps {
  title: string;
  image: string;
  path: string;
}

export default function CardItemNav({ title, image, path }: ICardItemNavProps) {
  return <CardItemNavWrapper style={{ backgroundImage: `url(${image})` }}>
    <Link to={path} target="--blank" >
      <div className="title">{title}</div>
    </Link>
  </CardItemNavWrapper>
}


const CardItemNavWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all .3s ease-in-out;

  a {
    display: block;
    position: relative;
    height: 100%;
    
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: red;
      font-weight: 700;
    }

  }

  &:hover {
    transform: scale(1.1);
  }
`