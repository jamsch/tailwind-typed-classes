type Size =
  | 'px'
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;

type Color =
  | 'transparent'
  | 'current'
  | 'black'
  | 'white'
  | `${'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'}-${
      | 50
      | 100
      | 200
      | 300
      | 400
      | 500
      | 600
      | 700
      | 800
      | 900}`;

type ExtendValue<
  TBase extends string | number,
  TValue extends string | undefined = undefined,
> = TValue extends undefined ? TBase : TBase | TValue;

type OpacityAmount = 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;

type PositionSide =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top';

type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

type BrightnessAmount = 0 | 50 | 75 | 90 | 100 | 105 | 110 | 125 | 150 | 200;

type ContrastAmount = 0 | 50 | 75 | 100 | 125 | 150 | 200;

type HueRotateAmount = 180 | 90 | 60 | 30 | 15 | 0;

type TransitionAmount = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

// Layout

/** https://tailwindcss.com/docs/container */
type Container = `container`;

/** https://tailwindcss.com/docs/box-decoration-break */
type BoxDecorationBreak = `decoration-${'slice' | 'clone'}`;

/** https://tailwindcss.com/docs/box-sizing */
type BoxSizing = `box-${'border' | 'content'}`;

/** https://tailwindcss.com/docs/display */
type Display =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden';

/** https://tailwindcss.com/docs/float */
type Float = `float-${'left' | 'right' | 'none'}`;
/** https://tailwindcss.com/docs/clear */
type Clear = `clear-${'left' | 'right' | 'both' | 'none'}`;
/** https://tailwindcss.com/docs/isolation */
type Isolation = `isolate-auto` | `isolation-isolate`;
/** https://tailwindcss.com/docs/object-fit */
type ObjectFit = `object-${'contain' | 'cover' | 'fill' | 'none' | 'scale-down'}`;

/** https://tailwindcss.com/docs/object-position */
type ObjectPosition = `object-${PositionSide}`;

/** https://tailwindcss.com/docs/overflow */
type Overflow = `overflow${'-x' | '-y' | ''}-${'auto' | 'hidden' | 'visible' | 'scroll'}`;

/** https://tailwindcss.com/docs/overscroll-behavior */
type OverscrollBehavior = `overscroll${'-x' | '-y' | ''}-${'auto' | 'contain' | 'none'}`;

/** https://tailwindcss.com/docs/position */
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

type Placement = 'inset' | 'top' | 'right' | 'bottom' | 'left';

type PlacementValue = Size | 'auto' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | 'full';

/** https://tailwindcss.com/docs/top-right-bottom-left */
type TopRightBottomLeft = `${'-' | ''}${Placement}${'-x' | '-y' | ''}-${PlacementValue}`;

/** https://tailwindcss.com/docs/visibility */
type Visibility = `${'visible' | 'invisible'}`;

/** https://tailwindcss.com/docs/z-index */
type ZIndex = `z-${'auto' | '0' | '10' | '20' | '30' | '40' | '50'}`;

/** https://tailwindcss.com/docs/flex-direction */
type FlexDirection = `flex-${'row' | 'row-reverse' | 'col' | 'col-reverse'}`;

/** https://tailwindcss.com/docs/flex-wrap */
type FlexWrap = `flex-${'wrap' | 'wrap-reverse' | 'nowrap'}`;

/** https://tailwindcss.com/docs/flex */
type Flex = 'flex' | `flex-${'1' | 'auto' | 'initial' | 'none'}`;

/** https://tailwindcss.com/docs/flex-grow */
type FlexGrow = `flex-grow${'-0' | ''}`;

/** https://tailwindcss.com/docs/flex-shrink */
type FlexShrink = `flex-shrink${'-0' | ''}`;

/** https://tailwindcss.com/docs/order */
type Order = `order-${
  | 'first'
  | 'last'
  | 'none'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'}`;

/** https://tailwindcss.com/docs/grid-template-columns */
type GridTemplateColumns = `grid-cols-${
  | 'none'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'}`;

/** Grid Column Start / End https://tailwindcss.com/docs/grid-column */
type GridColumn =
  | `col-${'span' | 'start' | 'end'}-${'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'}`
  | `col-${'start' | 'end'}-auto`
  | `col-span-full`
  | `col-auto`;

/** https://tailwindcss.com/docs/grid-template-rows */
type GridTemplateRows = `grid-rows-${1 | 2 | 3 | 4 | 5 | 6 | 'none'}`;

/** https://tailwindcss.com/docs/grid-row */
type GridRow =
  | `row-${'span' | 'start' | 'end'}-${'1' | '2' | '3' | '4' | '5' | '6'}`
  | `row-${'start' | 'end'}-auto`
  | `row-span-full`
  | `row-auto`;

/** https://tailwindcss.com/docs/grid-auto-flow */
type GridAutoFlow = `grid-flow-${'row' | 'col'}${'-dense' | ''}`;

/** https://tailwindcss.com/docs/grid-auto-columns */
type GridAutoColumns = `auto-cols-${'auto' | 'min' | 'max' | 'fr'}`;

/** https://tailwindcss.com/docs/gap */
type Gap = `gap${'-x' | '-y' | ''}-${Size}`;

/** https://tailwindcss.com/docs/justify-content */
type JustifyContent = `justify-${'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'}`;

/** https://tailwindcss.com/docs/justify-items */
type JustifyItems = `justify-items-${'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/justify-self */
type JustifySelf = `justify-self-${'auto' | 'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/align-content */
type AlignContent = `content-${'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'}`;

/** https://tailwindcss.com/docs/align-items */
type AlignItems = `items-${'start' | 'end' | 'center' | 'baseline' | 'stretch'}`;

/** https://tailwindcss.com/docs/align-self */
type AlignSelf = `self-${'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'}`;

/** https://tailwindcss.com/docs/place-content */
type PlaceContent = `place-content-${'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch'}`;

/** https://tailwindcss.com/docs/place-items */
type PlaceItems = `place-items-${'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/place-self */
type PlaceSelf = `place-self-${'auto' | 'start' | 'end' | 'center' | 'stretch'}`;

// SPACING

type Axis = 'x' | 'y' | 't' | 'r' | 'l' | 'b' | '';

/** https://tailwindcss.com/docs/padding */
type Padding = `p${Axis}-${Size}`;

/** https://tailwindcss.com/docs/margin */
type Margin = `-m${Axis}-${Size}` | `m${Axis}-${Size | 'auto'}`;

/** https://tailwindcss.com/docs/space */
type Space = `${'-' | ''}space-${'x' | 'y'}-${Size | 'reverse'}`;

/** https://tailwindcss.com/docs/width */
type Width = `w-${
  | Size
  | 'auto'
  | '1/2'
  | `${'1' | '2'}/3`
  | `${'1' | '2' | '3'}/4`
  | `${'1' | '2' | '3' | '4'}/5`
  | `${'1' | '2' | '3' | '4' | '5'}/6`
  | `${'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'}/12`
  | 'full'
  | 'screen'
  | 'min'
  | 'max'}`;

/** https://tailwindcss.com/docs/min-width */
type MinWidth = `min-w-${0 | 'full' | 'min' | 'max'}`;

/** https://tailwindcss.com/docs/max-width */
type MaxWidth = `max-w-${
  | 0
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'full'
  | 'min'
  | 'max'
  | 'prose'
  | `screen-${'sm' | 'md' | 'lg' | 'xl' | '2xl'}`}`;

// Height

type ExtraHeightSizes =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | 'full'
  | 'screen';

/** https://tailwindcss.com/docs/height */
type Height = `h-${Size | 'auto' | ExtraHeightSizes}`;

/** https://tailwindcss.com/docs/min-height */
type MinHeight = `min-h-${0 | 'full' | 'screen'}`;

/** https://tailwindcss.com/docs/max-height */
type MaxHeight = `max-h-${Size | ExtraHeightSizes}`;

/** https://tailwindcss.com/docs/font-family */
type FontFamily<TFontFamily extends string | undefined> = `font-${ExtendValue<'font-sans' | 'font-serif' | 'font-mono', TFontFamily>}`;

/** https://tailwindcss.com/docs/font-size */
type FontSize = `text-${'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '8xl' | '9xl'}`;

/** https://tailwindcss.com/docs/font-smoothing */
type FontSmoothing = `${'antialiased' | 'subpixel-antialiased'}`;

/** https://tailwindcss.com/docs/font-style */
type FontStyle = `${'italic' | 'not-italic'}`;

/** https://tailwindcss.com/docs/font-weight */
type FontWeight = `font-${
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'}`;

/** https://tailwindcss.com/docs/font-variant-numeric */
type FontVariantNumeric = `${
  | 'normal-nums'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'}`;

/** https://tailwindcss.com/docs/letter-spacing */
type LetterSpacing = `tracking-${'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'}`;

/** https://tailwindcss.com/docs/line-height */
type LineHeight = `leading-${
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose'}`;

/** https://tailwindcss.com/docs/list-style-type */
type ListStyleType = `list-${'none' | 'disc' | 'decimal'}`;

/** https://tailwindcss.com/docs/list-style-position */
type ListStylePosition = `list-${'inside' | 'outside'}`;

/** https://tailwindcss.com/docs/placeholder-color */
type PlaceholderColor<TColors extends string | undefined = undefined> = `placeholder-${ExtendValue<Color, TColors>}`;

/** https://tailwindcss.com/docs/text-align */
type TextAlign = `text-${'left' | 'center' | 'right' | 'justify'}`;

/** https://tailwindcss.com/docs/text-color */
type TextColor = `text-${Color}`;

/** https://tailwindcss.com/docs/text-opacity */
type TextOpacity<TOpacity extends string | undefined> = `text-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/text-decoration */
type TextDecoration = `${'underline' | 'line-through' | 'no-underline'}`;

/** https://tailwindcss.com/docs/text-transform */
type TextTransform = `${'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'}`;

/** https://tailwindcss.com/docs/text-overflow */
type TextOverflow = `${'truncate' | 'overflow-ellipsis' | 'overflow-clip'}`;

/** https://tailwindcss.com/docs/vertical-align */
type VerticalAlign = `align-${'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'}`;

/** https://tailwindcss.com/docs/whitespace */
type Whitespace = `whitespace-${'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'}`;

/** https://tailwindcss.com/docs/word-break */
type WordBreak = `break-${'normal' | 'words' | 'all'}`;

/** https://tailwindcss.com/docs/background-attachment */
type BackgroundAttachment = `bg-${'fixed' | 'local' | 'scroll'}`;

/** https://tailwindcss.com/docs/background-clip */
type BackgroundClip = `bg-clip-${'border' | 'padding' | 'content' | 'text'}`;

/** https://tailwindcss.com/docs/background-color */
type BackgroundColor<TColor extends string | undefined> = `bg-${ExtendValue<Color, TColor>}`;

/** https://tailwindcss.com/docs/background-opacity */
type BackgroundOpacity<TOpacity extends string | undefined> = `bg-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/background-origin */
type BackgroundOrigin = `bg-origin-${'border' | 'padding' | 'content'}`;

/** https://tailwindcss.com/docs/background-position */
type BackgroundPosition = `bg-${PositionSide}`;

/** https://tailwindcss.com/docs/background-repeat */
type BackgroundRepeat = `bg-${'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat-round' | 'repeat-space'}`;

/** https://tailwindcss.com/docs/background-size */
type BackgroundSize = `bg-${'auto' | 'cover' | 'contain'}`;

/** https://tailwindcss.com/docs/background-image */
type BackgroundImage<TExtraBgs extends string | undefined> = `bg-${ExtendValue<
  'none' | `gradient-to-${'t' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'}`,
  TExtraBgs
>}`;

/** https://tailwindcss.com/docs/gradient-color-stops */
type GradientColorStops<TColor extends string | undefined> = `${'from' | 'via' | 'to'}-${ExtendValue<Color, TColor>}`;

/** https://tailwindcss.com/docs/border-radius */
type BorderRadius =
  | `rounded`
  | `rounded${'-t' | '-r' | '-b' | '-l' | '-tl' | '-tr' | '-br' | '-bl' | ''}-${
      | 'none'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | 'full'}`;

/** https://tailwindcss.com/docs/border-width */
type BorderWidth = `border${'-t' | '-r' | '-b' | '-l' | ''}${'-0' | '-2' | '-4' | '-8' | ''}`;

/** https://tailwindcss.com/docs/border-color */
type BorderColor<TColor extends string | undefined> = `border-${ExtendValue<Color, TColor>}`;

/** https://tailwindcss.com/docs/border-opacity */
type BorderOpacity<TOpacity extends string | undefined> = `border-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/border-style */
type BorderStyle = `border-${'solid' | 'dashed' | 'dotted' | 'double' | 'none'}`;

/** https://tailwindcss.com/docs/divide-width */
type DivideWidth = `divide-${'x' | 'y'}${'-0' | '-2' | '-4' | '-8' | '-reverse' | ''}`;

/** https://tailwindcss.com/docs/divide-color */
type DivideColor = `divide-${Color}`;

/** https://tailwindcss.com/docs/divide-opacity */
type DivideOpacity<TOpacity extends string | undefined> = `divide-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/divide-style */
type DivideStyle = `divide-${'solid' | 'dashed' | 'dotted' | 'double' | 'none'}`;

/** https://tailwindcss.com/docs/ring-width */
type RingWidth = `ring` | `ring-${0 | 1 | 2 | 4 | 8 | 'inset'}`;

/** https://tailwindcss.com/docs/ring-color */
type RingColor = `ring-${Color}`;

/** https://tailwindcss.com/docs/ring-opacity */
type RingOpacity<TOpacity extends string | undefined> = `ring-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/ring-offset-width */
type RingOffsetWidth = `ring-offset-${0 | 1 | 2 | 4 | 8}`;

/** https://tailwindcss.com/docs/ring-offset-color */
type RingOffsetColor = `ring-offset-${Color}`;

/** https://tailwindcss.com/docs/box-shadow */
type BoxShadow = `shadow` | `shadow-${'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'}`;

/** https://tailwindcss.com/docs/opacity */
type Opacity<TOpacity extends string | undefined> = `opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/mix-blend-mode */
type MixBlendMode = `mix-blend-${BlendMode}`;

/** https://tailwindcss.com/docs/background-blend-mode */
type BackgroundBlendMode = `bg-blend-${BlendMode}`;

/** https://tailwindcss.com/docs/filter */
type Filter = `filter` | `filter-none`;

/** https://tailwindcss.com/docs/blur */
type Blur = `blur` | `blur-${'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'}`;

/** https://tailwindcss.com/docs/brightness */
type Brightness = `brightness-${BrightnessAmount}`;

/** https://tailwindcss.com/docs/contrast */
type Contrast = `contrast-${ContrastAmount}`;

/** https://tailwindcss.com/docs/drop-shadow */
type DropShadow = `shadow` | `shadow-${'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'}`;

/** https://tailwindcss.com/docs/grayscale */
type Grayscale = `grayscale` | `grayscale-0`;

/** https://tailwindcss.com/docs/hue-rotate */
type HueRotate = `${'-' | ''}hue-rotate-${HueRotateAmount}`;

/** https://tailwindcss.com/docs/invert */
type Invert = `invert` | `invert-0`;

/** https://tailwindcss.com/docs/saturate */
type Saturate = `saturate-${0 | 50 | 100 | 150 | 200}`;

/** https://tailwindcss.com/docs/sepia */
type Sepia = `sepia` | `sepia-0`;

/** https://tailwindcss.com/docs/backdrop-filter */
type BackdropFilter = `backdrop-filter` | `backdrop-filter-none`;

/** https://tailwindcss.com/docs/backdrop-blur */
type BackdropBlur = `backdrop-blur` | `backdrop-blur-${'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'}`;

/** https://tailwindcss.com/docs/backdrop-brightness */
type BackdropBrightness = `backdrop-brightness-${BrightnessAmount}`;

/** https://tailwindcss.com/docs/backdrop-contrast */
type BackdropContrast = `backdrop-contrast-${ContrastAmount}`;

/** https://tailwindcss.com/docs/backdrop-grayscale */
type BackdropGrayscale = `backdrop-grayscale` | `backdrop-grayscale-0`;

/** https://tailwindcss.com/docs/backdrop-hue-rotate */
type BackdropHueRotate = `${'-' | ''}backdrop-hue-rotate-${HueRotateAmount}`;

/** https://tailwindcss.com/docs/backdrop-invert */
type BackdropInvert = `backdrop-invert` | `backdrop-invert-0`;

/** https://tailwindcss.com/docs/backdrop-opacity */
type BackdropOpacity<TOpacity extends string | undefined> = `backdrop-opacity-${ExtendValue<OpacityAmount, TOpacity>}`;

/** https://tailwindcss.com/docs/backdrop-saturate */
type BackdropSaturate = `backdrop-saturate-${0 | 50 | 100 | 150 | 200}`;

/** https://tailwindcss.com/docs/backdrop-sepia */
type BackdropSepia = `backdrop-sepia` | `backdrop-sepia-0`;

/** https://tailwindcss.com/docs/border-collapse */
type BorderCollapse = `border-${'collapse' | 'separate'}`;

/** https://tailwindcss.com/docs/table-layout */
type TableLayout = `table-${'auto' | 'fixed'}`;

/** https://tailwindcss.com/docs/transition-property */
type TransitionProperty = `transition` | `transition-${'none' | 'all' | 'colors' | 'opacity' | 'shadow' | 'transform'}`;

/** https://tailwindcss.com/docs/transition-duration */
type TransitionDuration = `duration-${TransitionAmount}`;

/** https://tailwindcss.com/docs/transition-timing-function */
type TransitionTimingFunction = `ease-${'linear' | 'in' | 'out' | 'in-out'}`;

/** https://tailwindcss.com/docs/transition-delay */
type TransitionDelay = `delay-${TransitionAmount}`;

/** https://tailwindcss.com/docs/animation */
type BaseAnimationValue = 'none' | 'spin' | 'ping' | 'pulse' | 'bounce';

type Animation = `animate-${BaseAnimationValue}`;

type ExtendedAnimation<TAnimation extends string | undefined> = `animate-${ExtendValue<
  BaseAnimationValue,
  TAnimation
>}`;

/** https://tailwindcss.com/docs/transform */
type Transform = `transform${'-gpu' | '-none' | ''}`;

/** https://tailwindcss.com/docs/transform-origin */
type TransformOrigin = `origin-${
  | 'center'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left'}`;

/** https://tailwindcss.com/docs/scale */
type Scale = `scale${'-x' | '-y' | ''}-${0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150}`;

/** https://tailwindcss.com/docs/rotate */
type Rotate = `${'-' | ''}rotate-${0 | 1 | 2 | 3 | 6 | 12 | 45 | 90 | 180}`;

/** https://tailwindcss.com/docs/translate */
type Translate = `${'-' | ''}translate${'-x' | '-y' | ''}-${
  | Size
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | 'full'}`;

/** https://tailwindcss.com/docs/skew */
type Skew = `${'-' | ''}skew${'-x' | '-y' | ''}-${0 | 1 | 2 | 3 | 6 | 12}`;

/** https://tailwindcss.com/docs/appearance */
type Appearance = `appearance-none`;

/** https://tailwindcss.com/docs/cursor */
type Cursor = `cursor-${'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'help' | 'not-allowed'}`;

/** https://tailwindcss.com/docs/outline */
type Outline = `outline-${'none' | 'white' | 'black'}`;

/** https://tailwindcss.com/docs/pointer-events */
type PointerEvents = `pointer-events-${'none' | 'auto'}`;

/** https://tailwindcss.com/docs/resize */
type Resize = `resize` | `resize-${'none' | 'y' | 'x'}`;

/** https://tailwindcss.com/docs/user-select */
type UserSelect = `select-${'none' | 'text' | 'all' | 'auto'}`;

/** https://tailwindcss.com/docs/fill */
type Fill = `fill-current`;

/** https://tailwindcss.com/docs/stroke */
type Stroke = `stroke-current`;

/** https://tailwindcss.com/docs/stroke-width */
type StrokeWidth = `stroke-${0 | 1 | 2}`;

/** https://tailwindcss.com/docs/screen-readers */
type ScreenReaders = `sr-only` | `not-sr-only`;

/** https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover */
type Group = 'group';

export type ExtendConfig = {
  fontFamily?: string;
  screens?: string;
  animation?: string;
  backgroundImage?: string;
  opacity?: string;
  colors?: string;
};

type BuildTailwindScreens<
  TConfig extends ExtendConfig = {},
  TScreens extends string | undefined = TConfig['screens'] extends string ? TConfig['screens'] : undefined,
> = ExtendValue<Breakpoints, TScreens>;

export type BuildTailwindClasses<
  TConfig extends ExtendConfig = {},
  TAnimation extends string | undefined = TConfig['animation'] extends string ? TConfig['animation'] : undefined,
  TBackgroundImage extends string | undefined = TConfig['backgroundImage'] extends string
    ? TConfig['backgroundImage']
    : undefined,
  TOpacity extends string | undefined = TConfig['opacity'] extends string ? TConfig['opacity'] : undefined,
  TColors extends string | undefined = TConfig['colors'] extends string ? TConfig['colors'] : undefined,
  TFontFamily extends string | undefined = TConfig['fontFamily'] extends string ? TConfig['fontFamily'] : undefined,
> =
  | BoxSizing
  | Container
  | BoxDecorationBreak
  | Display
  | Clear
  | Isolation
  | Float
  | ObjectFit
  | ObjectPosition
  | Overflow
  | OverscrollBehavior
  | Position
  | TopRightBottomLeft
  | Visibility
  | ZIndex
  | FlexDirection
  | FlexWrap
  | Flex
  | FlexGrow
  | FlexShrink
  | Order
  | GridTemplateColumns
  | GridColumn
  | GridTemplateRows
  | GridRow
  | GridAutoFlow
  | GridAutoColumns
  | Gap
  | JustifyContent
  | JustifyItems
  | JustifySelf
  | AlignContent
  | AlignItems
  | AlignSelf
  | PlaceContent
  | PlaceItems
  | PlaceSelf
  | Padding
  | Margin
  | Space
  | Width
  | MinWidth
  | MaxWidth
  | Height
  | MinHeight
  | MaxHeight
  | FontFamily<TFontFamily>
  | FontSize
  | FontSmoothing
  | FontStyle
  | FontWeight
  | FontVariantNumeric
  | LetterSpacing
  | LineHeight
  | ListStyleType
  | ListStylePosition
  | PlaceholderColor<TColors>
  | TextAlign
  | TextColor
  | TextOpacity<TOpacity>
  | TextDecoration
  | TextTransform
  | TextOverflow
  | VerticalAlign
  | Whitespace
  | WordBreak
  | BackgroundAttachment
  | BackgroundClip
  | BackgroundColor<TColors>
  | BackgroundOpacity<TOpacity>
  | BackgroundOrigin
  | BackgroundPosition
  | BackgroundRepeat
  | BackgroundSize
  | BackgroundImage<TBackgroundImage>
  | GradientColorStops<TColors>
  | BorderRadius
  | BorderWidth
  | BorderColor<TColors>
  | BorderOpacity<TOpacity>
  | BorderStyle
  | DivideWidth
  | DivideColor
  | DivideOpacity<TOpacity>
  | DivideStyle
  | RingWidth
  | RingColor
  | RingOpacity<TOpacity>
  | RingOffsetWidth
  | RingOffsetColor
  | BoxShadow
  | Opacity<TOpacity>
  | MixBlendMode
  | BackgroundBlendMode
  | Filter
  | Blur
  | Brightness
  | Contrast
  | DropShadow
  | Grayscale
  | HueRotate
  | Invert
  | Saturate
  | Sepia
  | BackdropFilter
  | BackdropBlur
  | BackdropBrightness
  | BackdropContrast
  | BackdropGrayscale
  | BackdropHueRotate
  | BackdropInvert
  | BackdropOpacity<TOpacity>
  | BackdropSaturate
  | BackdropSepia
  | BorderCollapse
  | TableLayout
  | TransitionProperty
  | TransitionDuration
  | TransitionTimingFunction
  | TransitionDelay
  | ExtendedAnimation<TAnimation>
  | Transform
  | TransformOrigin
  | Scale
  | Rotate
  | Translate
  | Skew
  | Appearance
  | Cursor
  | Outline
  | PointerEvents
  | Resize
  | UserSelect
  | Fill
  | Stroke
  | StrokeWidth
  | ScreenReaders
  | Group;

export type TailwindClass = BuildTailwindClasses;

type TailwindClassValue<TClasses extends string, TScreens extends string> =
  | TailwindClassDictionary<TClasses>
  | TailwindVariantDictionary<TClasses, TScreens>
  | TClasses
  | null
  | boolean
  | undefined;

type DarkModeVariant = 'dark';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl';
type ResponsiveVariant<TScreens extends string | undefined> = ExtendValue<Breakpoints, TScreens>;

type MotionStateVariant = 'motion-safe' | 'motion-reduce';

type StateVariant =
  | 'hover'
  | 'focus'
  | 'active'
  | 'group-hover'
  | 'group-focus'
  | 'focus-within'
  | 'disabled'
  | 'visited'
  | 'checked'
  | 'first'
  | 'last'
  | 'odd'
  | 'even';

export type BuildVariants<TScreens extends string> =
  | DarkModeVariant
  | ResponsiveVariant<TScreens>
  | MotionStateVariant
  | StateVariant
  | `${ResponsiveVariant<TScreens>}${`:${DarkModeVariant}` | ''}:${MotionStateVariant}`
  | `${ResponsiveVariant<TScreens>}${`:${DarkModeVariant}` | ''}:${MotionStateVariant}:${StateVariant}`
  | `${ResponsiveVariant<TScreens>}${`:${DarkModeVariant}` | ''}:${StateVariant}`
  | `${ResponsiveVariant<TScreens>}:${DarkModeVariant}`;

export type TailwindClassDictionary<TClasses extends string = TailwindClass> = {
  [id in TClasses]?: boolean | undefined;
};

type ConditionalTailwindArray<TClasses extends string> = Array<TClasses | undefined | false>;

export type TailwindVariantDictionary<TClasses extends string, TScreens extends string> = {
  [id in BuildVariants<TScreens>]?: TClasses | ConditionalTailwindArray<TClasses> | undefined | false;
};

type TailwindClassBuilderFunction<TClasses extends string, TScreens extends string> = (
  ...args: TailwindClassValue<TClasses, TScreens>[]
) => string;

function baseTw<TClasses extends string, TScreens extends string>(
  ...args: TailwindClassValue<TClasses, TScreens>[]
): string {
  let classes = '';
  for (const arg of args) {
    if (typeof arg === 'string' && arg) {
      classes += ` ${arg}`;
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        const value = arg[key as keyof typeof arg] as
          | boolean
          | undefined
          | TailwindClass
          | ConditionalTailwindArray<TClasses>;
        if (Array.isArray(value)) {
          const arr = value;
          classes += ` ${arr
            .reduce(
              (prev, current) => (current && typeof current === 'string' ? `${prev} ${key}:${current}` : prev),
              '',
            )
            .trimStart()}`;
        } else if (typeof value === 'string') {
          classes += ` ${key}:${value}`;
        } else if (typeof value === 'boolean' && value) {
          classes += ` ${key}`;
        }
      }
    }
  }
  return classes.trimStart();
}

export const tw: TailwindClassBuilderFunction<TailwindClass, Breakpoints> = baseTw;

/** Extends base Tailwind classes & screens */
export function createTw<TConfig extends ExtendConfig>(): TailwindClassBuilderFunction<
  BuildTailwindClasses<TConfig>,
  BuildTailwindScreens<TConfig>
> {
  return baseTw;
}
