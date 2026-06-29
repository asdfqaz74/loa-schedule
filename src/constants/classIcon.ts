// 계열 아이콘
import animalIcon from "@img/animal.webp";
import assassinIcon from "@img/assassin.webp";
import gunnerIcon from "@img/gunner.webp";
import gunnerFIcon from "@img/gunner-f.webp";
import mageIcon from "@img/mage.webp";
import martialArtistIcon from "@img/martial_artist.webp";
import mMartialArtistIcon from "@img/m-martial_artist.webp";
import specialistIcon from "@img/specialist.webp";
import warriorIcon from "@img/warrior.webp";

// 마법사 클래스
import arcanaIcon from "@img/arcana.webp";
import bardIcon from "@img/bard.webp";
import sorceressIcon from "@img/sorceress.webp";
import summonerIcon from "@img/summoner.webp";

// 전사(남) 클래스
import berserkerIcon from "@img/berserker.webp";
import destroyerIcon from "@img/destroyer.webp";
import holynightIcon from "@img/holynight.webp";
import warlordIcon from "@img/warlord.webp";

// 전사(여) 클래스
import slayerIcon from "@img/slayer.webp";
import valkyrieIcon from "@img/valkyrie.webp";

// 무도가 클래스
import battlemageIcon from "@img/battlemage.webp";
import glaivierIcon from "@img/glaivier.webp";
import infighterIcon from "@img/infighter.webp";
import soulfistIcon from "@img/soulfist.webp";
import strikerIcon from "@img/striker.webp";

// 헌터 클래스
import blasterIcon from "@img/blaster.webp";
import devilhunterIcon from "@img/devilhunter.webp";
import gunslingerIcon from "@img/gunslinger.webp";
import hawkeyeIcon from "@img/hawkeye.webp";

// 암살자 클래스
import bladeIcon from "@img/blade.webp";
import demonicIcon from "@img/demonic.webp";
import reaperIcon from "@img/reaper.webp";

// 스페셜리스트 클래스
import aeromancerIcon from "@img/aeromancer.webp";
import artistIcon from "@img/artist.webp";

// 기타 클래스
import dragonnightIcon from "@img/dragonnight.webp";

export const CLASS_ICONS = {
  기상술사: {
    label: "기상술사",
    src: aeromancerIcon,
  },
  환수사: {
    label: "환수사",
    src: animalIcon,
  },
  아르카나: {
    label: "아르카나",
    src: arcanaIcon,
  },
  도화가: {
    label: "도화가",
    src: artistIcon,
  },
  암살자: {
    label: "암살자",
    src: assassinIcon,
  },
  바드: {
    label: "바드",
    src: bardIcon,
  },
  배틀마스터: {
    label: "배틀마스터",
    src: battlemageIcon,
  },
  버서커: {
    label: "버서커",
    src: berserkerIcon,
  },
  블레이드: {
    label: "블레이드",
    src: bladeIcon,
  },
  블래스터: {
    label: "블래스터",
    src: blasterIcon,
  },
  데모닉: {
    label: "데모닉",
    src: demonicIcon,
  },
  디스트로이어: {
    label: "디스트로이어",
    src: destroyerIcon,
  },
  데빌헌터: {
    label: "데빌헌터",
    src: devilhunterIcon,
  },
  드래곤나이트: {
    label: "드래곤나이트",
    src: dragonnightIcon,
  },
  창술사: {
    label: "창술사",
    src: glaivierIcon,
  },
  "헌터(남)": {
    label: "헌터(남)",
    src: gunnerIcon,
  },
  "헌터(여)": {
    label: "헌터(여)",
    src: gunnerFIcon,
  },
  건슬링어: {
    label: "건슬링어",
    src: gunslingerIcon,
  },
  호크아이: {
    label: "호크아이",
    src: hawkeyeIcon,
  },
  홀리나이트: {
    label: "홀리나이트",
    src: holynightIcon,
  },
  인파이터: {
    label: "인파이터",
    src: infighterIcon,
  },
  마법사: {
    label: "마법사",
    src: mageIcon,
  },
  "무도가(여)": {
    label: "무도가(여)",
    src: martialArtistIcon,
  },
  "무도가(남)": {
    label: "무도가(남)",
    src: mMartialArtistIcon,
  },
  리퍼: {
    label: "리퍼",
    src: reaperIcon,
  },
  슬레이어: {
    label: "슬레이어",
    src: slayerIcon,
  },
  소서리스: {
    label: "소서리스",
    src: sorceressIcon,
  },
  기공사: {
    label: "기공사",
    src: soulfistIcon,
  },
  스페셜리스트: {
    label: "스페셜리스트",
    src: specialistIcon,
  },
  스트라이커: {
    label: "스트라이커",
    src: strikerIcon,
  },
  서머너: {
    label: "서머너",
    src: summonerIcon,
  },
  발키리: {
    label: "발키리",
    src: valkyrieIcon,
  },
  워로드: {
    label: "워로드",
    src: warlordIcon,
  },
  "전사(남)": {
    label: "전사(남)",
    src: warriorIcon,
  },
} as const;

export type ClassIconKey = keyof typeof CLASS_ICONS;
