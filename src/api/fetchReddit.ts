export default async function FetchReddit() {
  try {
    const res = await fetch("https://www.reddit.com/.json");
    const { data } = await res.json();

    if (!data) throw new Error("No data returned from fetch");

    return data as RedditApiResponse;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export interface RedditApiResponse {
  after: string;
  before: null;
  children: Children[];
  dist: number;
  geo_filter: null;
  modhash: string;
}

export interface Children {
  kind: string;
  data: ChildData;
}

export interface ChildData {
  all_awardings: AllAwarding[];
  allow_live_comments: boolean;
  approved_at_utc: null;
  approved_by: null;
  archived: boolean;
  author: string;
  author_flair_background_color: null | string;
  author_flair_css_class: null | string;
  author_flair_richtext: FlairRichtext[];
  author_flair_template_id: null | string;
  author_flair_text: null | string;
  author_flair_text_color: FlairTextColor | null;
  author_flair_type: FlairType;
  author_fullname: string;
  author_is_blocked: boolean;
  author_patreon_flair: boolean;
  author_premium: boolean;
  awarders: unknown[];
  banned_at_utc: null;
  banned_by: null;
  can_gild: boolean;
  can_mod_post: boolean;
  category: null;
  clicked: boolean;
  content_categories: string[] | null;
  contest_mode: boolean;
  created: number;
  created_utc: number;
  discussion_type: null;
  distinguished: null;
  domain: string;
  downs: number;
  edited: boolean;
  gilded: number;
  gildings: Gildings;
  hidden: boolean;
  hide_score: boolean;
  id: string;
  is_created_from_ads_ui: boolean;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  likes: null;
  link_flair_background_color: string;
  link_flair_css_class: null | string;
  link_flair_richtext: FlairRichtext[];
  link_flair_template_id?: string;
  link_flair_text: null | string;
  link_flair_text_color: FlairTextColor;
  link_flair_type: FlairType;
  locked: boolean;
  media: Media | null;
  media_embed: unknown;
  media_only: boolean;
  mod_note: null;
  mod_reason_by: null;
  mod_reason_title: null;
  mod_reports: unknown[];
  name: string;
  no_follow: boolean;
  num_comments: number;
  num_crossposts: number;
  num_reports: null;
  over_18: boolean;
  parent_whitelist_status: WhitelistStatus;
  permalink: string;
  pinned: boolean;
  post_hint?: PostHint;
  preview?: Preview;
  pwls: number;
  quarantine: boolean;
  removal_reason: null;
  removed_by: null;
  removed_by_category: null;
  report_reasons: null;
  saved: boolean;
  score: number;
  secure_media: Media | null;
  secure_media_embed: unknown;
  selftext: string;
  selftext_html: null | string;
  send_replies: boolean;
  spoiler: boolean;
  stickied: boolean;
  subreddit: string;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_subscribers: number;
  subreddit_type: SubredditType;
  suggested_sort: null | string;
  thumbnail: string;
  thumbnail_height: number | null;
  thumbnail_width: number | null;
  title: string;
  top_awarded_type: null | string;
  total_awards_received: number;
  tournament_data?: TournamentData;
  treatment_tags: unknown[];
  ups: number;
  upvote_ratio: number;
  url: string;
  url_overridden_by_dest?: string;
  user_reports: unknown[];
  view_count: null;
  visited: boolean;
  whitelist_status: WhitelistStatus;
  wls: number;
}

export interface AllAwarding {
  award_sub_type: AwardSubType;
  award_type: AwardType;
  awardings_required_to_grant_benefits: null;
  coin_price: number;
  coin_reward: number;
  count: number;
  days_of_drip_extension: number | null;
  days_of_premium: number | null;
  description: string;
  end_date: null;
  giver_coin_reward: null;
  icon_format: IconFormat | null;
  icon_height: number;
  icon_url: string;
  icon_width: number;
  id: string;
  is_enabled: boolean;
  is_new: boolean;
  name: string;
  penny_donate: null;
  penny_price: number | null;
  resized_icons: ResizedIcon[];
  resized_static_icons: ResizedIcon[];
  start_date: null;
  static_icon_height: number;
  static_icon_url: string;
  static_icon_width: number;
  sticky_duration_seconds: null;
  subreddit_coin_reward: number;
  subreddit_id: null | string;
  tiers_by_required_awardings: null;
}

export enum AwardSubType {
  Appreciation = "APPRECIATION",
  Community = "COMMUNITY",
  Global = "GLOBAL",
  Premium = "PREMIUM",
}

export enum AwardType {
  Community = "community",
  Global = "global",
}

export enum IconFormat {
  Apng = "APNG",
  PNG = "PNG",
}

export interface ResizedIcon {
  height: number;
  url: string;
  width: number;
}

export interface FlairRichtext {
  a?: string;
  e: string;
  t?: string;
  u?: string;
}

export enum FlairTextColor {
  Dark = "dark",
  Light = "light",
}

export enum FlairType {
  Richtext = "richtext",
  Text = "text",
}

export interface Gildings {
  gid_1?: number;
  gid_2?: number;
  gid_3?: number;
}

export interface Media {
  reddit_video: RedditVideo;
}

export interface RedditVideo {
  bitrate_kbps: number;
  dash_url: string;
  duration: number;
  fallback_url: string;
  height: number;
  hls_url: string;
  is_gif: boolean;
  scrubber_media_url: string;
  transcoding_status: TranscodingStatus;
  width: number;
}

export enum TranscodingStatus {
  Completed = "completed",
}

export enum WhitelistStatus {
  AllAds = "all_ads",
  NoAds = "no_ads",
  SomeAds = "some_ads",
}

export enum PostHint {
  HostedVideo = "hosted:video",
  Image = "image",
  Link = "link",
}

export interface Preview {
  enabled: boolean;
  images: Image[];
  reddit_video_preview?: RedditVideo;
}

export interface Image {
  id: string;
  resolutions: ResizedIcon[];
  source: ResizedIcon;
  variants: unknown;
}

export enum SubredditType {
  Public = "public",
}

export interface TournamentData {
  currency: string;
  name: string;
  predictions: Prediction[];
  status: string;
  subreddit_id: string;
  theme_id: string;
  total_participants: number;
  tournament_id: string;
}

export interface Prediction {
  body: string;
  created_at: number;
  id: string;
  is_nsfw: boolean;
  is_rtjson: boolean;
  is_spoiler: boolean;
  options: Option[];
  resolved_option_id: null | string;
  status: Status;
  title: string;
  total_stake_amount: number;
  total_vote_count: number;
  user_selection: null;
  user_won_amount: null;
  vote_updates_remained: null;
  voting_end_timestamp: number;
}

export interface Option {
  id: string;
  image_url: null;
  text: string;
  total_amount: number;
  user_amount: null;
  vote_count: number;
}

export enum Status {
  Open = "OPEN",
  Resolved = "RESOLVED",
}

export enum Kind {
  T3 = "t3",
}
