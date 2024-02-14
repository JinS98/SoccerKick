import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import * as S from "../../src/component/units/highlights/highlights.style";
import { useRouter } from "next/router";
import { getDate } from "../../src/commons/library/utils";
import { useRecoilState } from "recoil";
import {
  boxesState,
  recentGameState,
  searchValueState,
} from "../../src/commons/stores";
import { filter, forEach, result } from "lodash";

export default function RestGetPage() {
  const [recent, setRecent] = useRecoilState(recentGameState);
  const [boxSt, setBoxSt] = useRecoilState(boxesState);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [value, setValue] = useRecoilState(searchValueState);
  const router = useRouter();
  const data1 = [];

  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get(
        "https://www.scorebat.com/video-api/v3/feed/?token=MzQ3NDNfMTY2OTA3NzU0NF81NmI0NWRjYzQ3YjYzOTg2NmM5OWY4N2E0MTE3NWJhZjE1MDFmOTA0"
      );
      if (result.data.response) {
        setData(result.data.response);
        setRecent(result.data.response.slice(0, 5));
      }
    };
    void onClickSync();
  });

  const onClickPlay = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`${e.currentTarget.id}`);
  };
  const onCompetitionUrl = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(`${e.target.id}`);
  };

  return (
    <>
      <S.Title>latest highlights</S.Title>
      <S.Back>
        {data?.map((el, index) => (
          <S.itemWrapper key={index} onClick={onClickPlay} id={el.matchviewUrl}>
            <S.item>
              <div>
                <S.thumbnail
                  style={{
                    backgroundImage: `url(${el.thumbnail})`,
                  }}
                ></S.thumbnail>
              </div>
              <S.item_content>
                <S.item_title>{el.title}</S.item_title>
                <S.item_competition
                  id={el.competitionUrl}
                  onClick={onCompetitionUrl}
                >
                  {el.competition}
                </S.item_competition>
                <S.Date>{getDate(el.date)}</S.Date>
              </S.item_content>
            </S.item>
          </S.itemWrapper>
        ))}
      </S.Back>
    </>
  );
}
