/** 音效类型 */
export enum AudioActionType {
  /** 召唤 */
  SOUND_SUMMON = 101,
  /** 特殊召唤 */
  SOUND_SPECIAL_SUMMON = 102,
  /** 发动 */
  SOUND_ACTIVATE = 103,
  /** 设置 */
  SOUND_SET = 104,
  /** 翻转 */
  SOUND_FILP = 105,
  /** 揭示 */
  SOUND_REVEAL = 106,
  /** 装备 */
  SOUND_EQUIP = 107,
  /** 破坏 */
  SOUND_DESTROYED = 108,
  /** 除外 */
  SOUND_BANISHED = 109,
  /** 生成 */
  SOUND_TOKEN = 110,
  /** 攻击 */
  SOUND_ATTACK = 201,
  /** 直接攻击 */
  SOUND_DIRECT_ATTACK = 202,
  /** 抽卡 */
  SOUND_DRAW = 203,
  /** 洗卡 */
  SOUND_SHUFFLE = 204,
  /** 伤害 */
  SOUND_DAMAGE = 205,
  /** 恢复 */
  SOUND_RECOVER = 206,
  /** 计数增加 */
  SOUND_COUNTER_ADD = 207,
  /** 计数减少 */
  SOUND_COUNTER_REMOVE = 208,
  /** 抛硬币 */
  SOUND_COIN = 209,
  /** 抛骰子 */
  SOUND_DICE = 210,
  /** 下一回合 */
  SOUND_NEXT_TURN = 211,
  /** 阶段 */
  SOUND_PHASE = 212,
  /** 菜单 */
  SOUND_MENU = 301,
  /** 按钮 */
  SOUND_BUTTON = 302,
  /** 信息 */
  SOUND_INFO = 303,
  /** 问题 */
  SOUND_QUESTION = 304,
  /** 选卡 */
  SOUND_CARD_PICK = 305,
  /** 移出卡片 */
  SOUND_CARD_DROP = 306,
  /** 玩家进入 */
  SOUND_PLAYER_ENTER = 307,
  /** 聊天 */
  SOUND_CHAT = 308,
  /** 所有 */
  BGM_ALL = 0,
  /** 决斗 */
  BGM_DUEL = 1,
  /** 菜单 */
  BGM_MENU = 2,
  /** 卡组 */
  BGM_DECK = 3,
  /** 优势 */
  BGM_ADVANTAGE = 4,
  /** 劣势 */
  BGM_DISADVANTAGE = 5,
  /** 胜利 */
  BGM_WIN = 6,
  /** 失败 */
  BGM_LOSE = 7,
}
