import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./bannerStyle";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { recentGameState } from "../../../../commons/stores";
import { getDate } from "../../../../commons/library/utils";
import { useRouter } from "next/router";
import { mediaL } from "../../../../commons/styles/mediaQueries";

export default function LayoutBanner() {
  const router = useRouter();
  const [recent, setRecent] = useRecoilState(recentGameState);

  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get(
        "https://www.scorebat.com/video-api/v3/feed/?token=MzQ3NDNfMTY2OTA3NzU0NF81NmI0NWRjYzQ3YjYzOTg2NmM5OWY4N2E0MTE3NWJhZjE1MDFmOTA0"
      );
      if (result.data.response) {
        setRecent(result.data.response.splice(0, 5));
      }
    };
    void onClickSync();
  }, []);

  const onClickPlay = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`${e.currentTarget.id}`);
  };

  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "29%",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <S.Banner>
      <S.Box>
        <Slider {...settings}>
          <S.Item>
            <S.Recent
              onClick={onClickPlay}
              id={`${recent[0]?.matchviewUrl}`}
              style={{
                backgroundImage: `url(${recent[0]?.thumbnail})`,
              }}
            >
              <S.Detail>
                <S.Title>{recent[0]?.title}</S.Title>
                <S.Sub>
                  <S.Ctg>{recent[0]?.competition}</S.Ctg>
                  <S.Date>{getDate(recent[0]?.date)}</S.Date>
                </S.Sub>
              </S.Detail>
            </S.Recent>
          </S.Item>
          <S.Item>
            <S.Recent
              onClick={onClickPlay}
              id={`${recent[0]?.matchviewUrl}`}
              style={{
                backgroundImage: `url(${recent[1]?.thumbnail})`,
              }}
            >
              <S.Detail>
                <S.Title>{recent[1]?.title}</S.Title>
                <S.Sub>
                  <S.Ctg>{recent[1]?.competition}</S.Ctg>
                  <S.Date>{getDate(recent[1]?.date)}</S.Date>
                </S.Sub>
              </S.Detail>
            </S.Recent>
          </S.Item>
          <S.Item>
            <S.Recent
              onClick={onClickPlay}
              id={`${recent[0]?.matchviewUrl}`}
              style={{
                backgroundImage: `url(${recent[2]?.thumbnail})`,
              }}
            >
              <S.Detail>
                <S.Title>{recent[2]?.title}</S.Title>
                <S.Sub>
                  <S.Ctg>{recent[2]?.competition}</S.Ctg>
                  <S.Date>{getDate(recent[2]?.date)}</S.Date>
                </S.Sub>
              </S.Detail>
            </S.Recent>
          </S.Item>
          <S.Item>
            <S.Recent
              onClick={onClickPlay}
              id={`${recent[0]?.matchviewUrl}`}
              style={{
                backgroundImage: `url(${recent[3]?.thumbnail})`,
              }}
            >
              <S.Detail>
                <S.Title>{recent[3]?.title}</S.Title>
                <S.Sub>
                  <S.Ctg>{recent[3]?.competition}</S.Ctg>
                  <S.Date>{getDate(recent[3]?.date)}</S.Date>
                </S.Sub>
              </S.Detail>
            </S.Recent>
          </S.Item>
          <S.Item>
            <S.Recent
              onClick={onClickPlay}
              id={`${recent[0]?.matchviewUrl}`}
              style={{ backgroundImage: `url(${recent[4]?.thumbnail})` }}
            >
              <S.Detail>
                <S.Title>{recent[4]?.title}</S.Title>
                <S.Sub>
                  <S.Ctg>{recent[4]?.competition}</S.Ctg>
                  <S.Bar>|</S.Bar>
                  <S.Date>{getDate(recent[4]?.date)}</S.Date>
                </S.Sub>
              </S.Detail>
            </S.Recent>
          </S.Item>
        </Slider>
      </S.Box>
    </S.Banner>
  );
}
