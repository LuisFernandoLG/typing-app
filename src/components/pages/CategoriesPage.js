import { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

const initialCategories = [
  {
    id: 1,
    name: "famous",
    imageSrc:
      "https://i.pinimg.com/originals/dd/84/17/dd84170d930894deb32d234573c36c4d.jpg",
  },
  {
    id: 2,
    name: "love",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1014634838999961601/PjoSZW9d_400x400.jpg",
  },
  {
    id: 3,
    name: "eduaction",
    imageSrc:
      "https://s1.favim.com/orig/150215/motivation-school-study-tumblr-Favim.com-2483330.png",
  },
];

export const CategoriesPage = () => {
  const [categories, setCategories] = useState(initialCategories);

  return (
    <GridContainer>
      {categories.map((item) => (
        <CategoryCard as="figure" flex flex_dc key={item.id}>
          <div className="img">
            <img src={item.imageSrc} alt={item.name} />
          </div>
          <figcaption className="name">{item.name}</figcaption>
        </CategoryCard>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  width: 100%;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.25rem, 1fr));
  gap: 1rem;
  padding: 1rem;

  min-height: 100vh;
`;

const CategoryCard = styled(Wrapper)`
  height: 16.5rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  background: ${({ theme: { primaryColor } }) => primaryColor};

  .img {
    max-height: 70%;
    min-height: 70%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .name {
    color: ${({ theme: { textColor } }) => textColor};
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
