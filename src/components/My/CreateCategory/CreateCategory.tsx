import * as styles from './CreateCategory.style';
import Txt from '../../../constants/Txt/Txt';
import { COLORS } from '../../../constants/Color/Color';
import RepositoryItem from '../RepositoryItem/RepositoryItem';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useState } from 'react';
import { PostMemberRepositoryReq, RespositoriesInteface } from '../../../types/My';
import useGetRepository from '../../../hooks/useGetRepository';
import postRepository from '../../../apis/postRepository';
const CreateCategory = () => {
  const [repositories, setRepositories] = useState<RespositoriesInteface[]>();
  const [name, setName] = useState('');
  const [selectRepoArray, setSelectRepoArray] = useState<number[]>([]);
  const navigate = useNavigate();
  const { data } = useGetRepository();
  const handleConfirmClick = async () => {
    const postData: PostMemberRepositoryReq = {
      name: name,
      repositoriyIds: selectRepoArray,
    };
    await postRepository(postData);

    navigate('/my');
  };

  useEffect(() => {
    if (data) {
      const repositoriesData = data.flatMap((item) => item.repositories);

      setRepositories((prev) => [...(prev || []), ...repositoriesData]);
    }
  }, [data]);

  return (
    <styles.CreateCategoryContainer>
      <styles.CreateCategoryInputContainer>
        <styles.CreateCategoryInput
          placeholder="카테고리 이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
            .slice(0, repositories.length)
            .map((item) => (
              <RepositoryItem
                key={item.id}
                title={item.name}
                description={item.description}
                id={item.id}
                selectRepoArray={selectRepoArray}
                setSelectRepoArray={setSelectRepoArray}
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
