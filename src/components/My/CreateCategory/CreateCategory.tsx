import * as styles from './CreateCategory.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';
import { RespositoriesInteface } from '../../../types/My';
import useGetRepository from '../../../hooks/useGetRepository';
const CreateCategory = () => {
  const [repositories, setRepositories] = useState<RespositoriesInteface[]>();
  const navigate = useNavigate();
  const { data } = useGetRepository();
  const handleConfirmClick = () => {
    navigate('/my');
  };

  useEffect(() => {
    if (data) {
      const repositoriesData = data.flatMap((item) => item.repositories);

      setRepositories((prev) => [...(prev || []), ...repositoriesData]);
    }
  }, []);
  // @todo : recoil로 select된 레포들 id 관리해서 id배열에 넣고 서버에 데이터 보내기
  return (
    <styles.CreateCategoryContainer>
      <styles.CreateCategoryInputContainer>
        <styles.CreateCategoryInput placeholder="카테고리 이름" />
        <styles.CreateCategoryInputBorderLine />
      </styles.CreateCategoryInputContainer>
      <styles.SelectRepositoryContainer>
        <Txt color={COLORS.baseColors.gray950} textStyleName="P3">
          레포지토리를 선택해주세요
        </Txt>
        <Txt color={COLORS.baseColors.gray400} textStyleName="P6">
          해당 카테고리에 들어갈 레포지토리를 선택해주세요
        </Txt>
        {repositories &&
          repositories
            .slice(0, 4)
            .map((item) => (
              <RepositoryItem
                key={item.id}
                title={item.name}
                description={item.description}
                id={item.id}
              />
            ))}
      </styles.SelectRepositoryContainer>
      <styles.ConfirmButton onClick={handleConfirmClick}>
        <Txt color={COLORS.baseColors.gray000} textStyleName="B2">
          확인
        </Txt>
      </styles.ConfirmButton>
    </styles.CreateCategoryContainer>
  );
};
export default CreateCategory;
