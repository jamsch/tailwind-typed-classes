import clsx from 'clsx';

type Breakpoints = 'xs:' | 'sm:' | 'md:' | 'lg:' | 'xl:' | '';

type Hover = 'hover:' | '';

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
type Container = `${Breakpoints}container`;

/** https://tailwindcss.com/docs/box-decoration-break */
type BoxDecorationBreak = `${Breakpoints}decoration-${'slice' | 'clone'}`;

/** https://tailwindcss.com/docs/box-sizing */
type BoxSizing = `${Breakpoints}box-${'border' | 'content'}`;

type DisplayMode =
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

/** https://tailwindcss.com/docs/display */
type Display = `${Breakpoints}display-${DisplayMode}`;
/** https://tailwindcss.com/docs/float */
type Float = `${Breakpoints}float-${'left' | 'right' | 'none'}`;
/** https://tailwindcss.com/docs/clear */
type Clear = `${Breakpoints}clear-${'left' | 'right' | 'both' | 'none'}`;
/** https://tailwindcss.com/docs/isolation */
type Isolation = `${Breakpoints}isolate-auto` | `${Breakpoints}isolation-isolate`;
/** https://tailwindcss.com/docs/object-fit */
type ObjectFit = `${Breakpoints}object-${'contain' | 'cover' | 'fill' | 'none' | 'scale-down'}`;

/** https://tailwindcss.com/docs/object-position */
type ObjectPosition = `${Breakpoints}object-${PositionSide}`;

/** https://tailwindcss.com/docs/overflow */
type Overflow = `${Breakpoints}overflow${'-x' | '-y' | ''}-${'auto' | 'hidden' | 'visible' | 'scroll'}`;

/** https://tailwindcss.com/docs/overscroll-behavior */
type OverscrollBehavior = `${Breakpoints}overscroll${'-x' | '-y' | ''}-${'auto' | 'contain' | 'none'}`;

/** https://tailwindcss.com/docs/position */
type Position = `${Breakpoints}position-${'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'}`;

type Placement = 'inset' | 'top' | 'right' | 'bottom' | 'left';

type PlacementValue = Size | 'auto' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | 'full';

/** https://tailwindcss.com/docs/top-right-bottom-left */
type TopRightBottomLeft = `${Breakpoints}${'-' | ''}${Placement}${'-x' | '-y' | ''}-${PlacementValue}`;

/** https://tailwindcss.com/docs/visibility */
type Visibility = `${Breakpoints}${'visible' | 'invisible'}`;

/** https://tailwindcss.com/docs/z-index */
type ZIndex = `${Breakpoints}z-${'auto' | '0' | '10' | '20' | '30' | '40' | '50'}`;

/** https://tailwindcss.com/docs/flex-direction */
type FlexDirection = `${Breakpoints}flex-${'row' | 'row-reverse' | 'col' | 'col-reverse'}`;

/** https://tailwindcss.com/docs/flex-wrap */
type FlexWrap = `${Breakpoints}flex-${'wrap' | 'wrap-reverse' | 'nowrap'}`;

/** https://tailwindcss.com/docs/flex */
type Flex = `${Breakpoints}flex-${'1' | 'auto' | 'initial' | 'none'}`;

/** https://tailwindcss.com/docs/flex-grow */
type FlexGrow = `${Breakpoints}flex-grow${'-0' | ''}`;

/** https://tailwindcss.com/docs/flex-shrink */
type FlexShrink = `${Breakpoints}flex-shrink${'-0' | ''}`;

/** https://tailwindcss.com/docs/order */
type Order = `${Breakpoints}order-${
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
type GridTemplateColumns = `${Breakpoints}grid-cols-${
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
  | `${Breakpoints}col-${'span' | 'start' | 'end'}-${
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
      | '12'
      | '13'}`
  | `${Breakpoints}col-${'start' | 'end'}-auto`
  | `${Breakpoints}col-span-full`
  | `${Breakpoints}col-auto`;

/** https://tailwindcss.com/docs/grid-template-rows */
type GridTemplateRows = `${Breakpoints}grid-rows-${1 | 2 | 3 | 4 | 5 | 6 | 'none'}`;

/** https://tailwindcss.com/docs/grid-row */
type GridRow =
  | `${Breakpoints}row-${'span' | 'start' | 'end'}-${'1' | '2' | '3' | '4' | '5' | '6'}`
  | `${Breakpoints}row-${'start' | 'end'}-auto`
  | `${Breakpoints}row-span-full`
  | `${Breakpoints}row-auto`;

/** https://tailwindcss.com/docs/grid-auto-flow */
type GridAutoFlow = `${Breakpoints}grid-flow-${'row' | 'col'}${'-dense' | ''}`;

/** https://tailwindcss.com/docs/grid-auto-columns */
type GridAutoColumns = `${Breakpoints}auto-cols-${'auto' | 'min' | 'max' | 'fr'}`;

/** https://tailwindcss.com/docs/gap */
type Gap = `${Breakpoints}gap${'-x' | '-y' | ''}-${Size}`;

/** https://tailwindcss.com/docs/justify-content */
type JustifyContent = `${Breakpoints}justify-${'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'}`;

/** https://tailwindcss.com/docs/justify-items */
type JustifyItems = `${Breakpoints}justify-items-${'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/justify-self */
type JustifySelf = `${Breakpoints}justify-self-${'auto' | 'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/align-content */
type AlignContent = `${Breakpoints}content-${'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'}`;

/** https://tailwindcss.com/docs/align-items */
type AlignItems = `${Breakpoints}items-${'start' | 'end' | 'center' | 'baseline' | 'stretch'}`;

/** https://tailwindcss.com/docs/align-self */
type AlignSelf = `${Breakpoints}self-${'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'}`;

/** https://tailwindcss.com/docs/place-content */
type PlaceContent = `${Breakpoints}place-content-${
  | 'center'
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'}`;

/** https://tailwindcss.com/docs/place-items */
type PlaceItems = `${Breakpoints}place-items-${'start' | 'end' | 'center' | 'stretch'}`;

/** https://tailwindcss.com/docs/place-self */
type PlaceSelf = `${Breakpoints}place-self-${'auto' | 'start' | 'end' | 'center' | 'stretch'}`;

// SPACING

type Axis = 'x' | 'y' | 't' | 'r' | 'l' | 'b' | '';

/** https://tailwindcss.com/docs/padding */
type Padding = `${Breakpoints}p${Axis}-${Size}`;

/** https://tailwindcss.com/docs/margin */
type Margin = `${Breakpoints}${'-' | ''}m${Axis}-${Size}`;

/** https://tailwindcss.com/docs/space */
type Space = `${Breakpoints}${'-' | ''}space-${'x' | 'y'}-${Size | 'reverse'}`;

/** https://tailwindcss.com/docs/width */
type Width = `${Breakpoints}w-${
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
type MinWidth = `${Breakpoints}min-w-${0 | 'full' | 'min' | 'max'}`;

/** https://tailwindcss.com/docs/max-width */
type MaxWidth = `${Breakpoints}max-w-${
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
type Height = `${Breakpoints}h-${Size | 'auto' | ExtraHeightSizes}`;

/** https://tailwindcss.com/docs/min-height */
type MinHeight = `${Breakpoints}min-h-${0 | 'full' | 'screen'}`;

/** https://tailwindcss.com/docs/max-height */
type MaxHeight = `${Breakpoints}max-h-${Size | ExtraHeightSizes}`;

/** https://tailwindcss.com/docs/font-family */
type FontFamily = 'font-sans' | 'font-serif' | 'font-mono';

/** https://tailwindcss.com/docs/font-size */
type FontSize = `${Breakpoints}text-${
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '8xl'
  | '9xl'}`;

/** https://tailwindcss.com/docs/font-smoothing */
type FontSmoothing = `${Breakpoints}${'antialiased' | 'subpixel-antialiased'}`;

/** https://tailwindcss.com/docs/font-style */
type FontStyle = `${Breakpoints}${'italic' | 'not-italic'}`;

/** https://tailwindcss.com/docs/font-weight */
type FontWeight = `${Breakpoints}font-${
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
type FontVariantNumeric = `${Breakpoints}${
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
type LetterSpacing = `${Breakpoints}tracking-${'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'}`;

/** https://tailwindcss.com/docs/line-height */
type LineHeight = `${Breakpoints}leading-${
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
type ListStyleType = `${Breakpoints}list-${'none' | 'disc' | 'decimal'}`;

/** https://tailwindcss.com/docs/list-style-position */
type ListStylePosition = `${Breakpoints}list-${'inside' | 'outside'}`;

/** https://tailwindcss.com/docs/placeholder-color */
type PlaceholderColor = `${Breakpoints}placeholder-${Color}`;

/** https://tailwindcss.com/docs/text-align */
type TextAlign = `${Breakpoints}text-${'left' | 'center' | 'right' | 'justify'}`;

/** https://tailwindcss.com/docs/text-color */
type TextColor = `${Breakpoints}text-${Color}`;

/** https://tailwindcss.com/docs/text-opacity */
type TextOpacity = `${Breakpoints}text-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/text-decoration */
type TextDecoration = `${Breakpoints}${Hover}${'underline' | 'line-through' | 'no-underline'}`;

/** https://tailwindcss.com/docs/text-transform */
type TextTransform = `${Breakpoints}${'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'}`;

/** https://tailwindcss.com/docs/text-overflow */
type TextOverflow = `${Breakpoints}${'truncate' | 'overflow-ellipsis' | 'overflow-clip'}`;

/** https://tailwindcss.com/docs/vertical-align */
type VerticalAlign = `${Breakpoints}align-${'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom'}`;

/** https://tailwindcss.com/docs/whitespace */
type Whitespace = `${Breakpoints}whitespace-${'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap'}`;

/** https://tailwindcss.com/docs/word-break */
type WordBreak = `${Breakpoints}break-${'normal' | 'words' | 'all'}`;

/** https://tailwindcss.com/docs/background-attachment */
type BackgroundAttachment = `${Breakpoints}bg-${'fixed' | 'local' | 'scroll'}`;

/** https://tailwindcss.com/docs/background-clip */
type BackgroundClip = `${Breakpoints}bg-clip-${'border' | 'padding' | 'content' | 'text'}`;

/** https://tailwindcss.com/docs/background-color */
type BackgroundColor = `${Breakpoints}bg-${Color}`;

/** https://tailwindcss.com/docs/background-opacity */
type BackgroundOpacity = `${Breakpoints}bg-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/background-origin */
type BackgroundOrigin = `${Breakpoints}bg-origin-${'border' | 'padding' | 'content'}`;

/** https://tailwindcss.com/docs/background-position */
type BackgroundPosition = `${Breakpoints}bg-${PositionSide}`;

/** https://tailwindcss.com/docs/background-repeat */
type BackgroundRepeat = `${Breakpoints}bg-${
  | 'repeat'
  | 'no-repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat-round'
  | 'repeat-space'}`;

/** https://tailwindcss.com/docs/background-size */
type BackgroundSize = `${Breakpoints}bg-${'auto' | 'cover' | 'contain'}`;

/** https://tailwindcss.com/docs/background-image */
type BackgroundImage = `${Breakpoints}bg-${
  | 'none'
  | `gradient-to-${'t' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'}`}`;

/** https://tailwindcss.com/docs/gradient-color-stops */
type GradientColorStops = `${Breakpoints}${'from' | 'via' | 'to'}-${Color}`;

/** https://tailwindcss.com/docs/border-radius */
type BorderRadius =
  | `${Breakpoints}rounded`
  | `${Breakpoints}rounded${'-t' | '-r' | '-b' | '-l' | '-tl' | '-tr' | '-br' | '-bl' | ''}-${
      | 'none'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | 'full'}`;

/** https://tailwindcss.com/docs/border-width */
type BorderWidth = `${Breakpoints}border${'-t' | '-r' | '-b' | '-l' | ''}${'-0' | '-2' | '-4' | '-8' | ''}`;

/** https://tailwindcss.com/docs/border-color */
type BorderColor = `${Breakpoints}${Hover}border-${Color}`;

/** https://tailwindcss.com/docs/border-opacity */
type BorderOpacity = `${Breakpoints}border-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/border-style */
type BorderStyle = `${Breakpoints}border-${'solid' | 'dashed' | 'dotted' | 'double' | 'none'}`;

/** https://tailwindcss.com/docs/divide-width */
type DivideWidth = `${Breakpoints}divide-${'x' | 'y'}${'-0' | '-2' | '-4' | '-8' | '-reverse' | ''}`;

/** https://tailwindcss.com/docs/divide-color */
type DivideColor = `${Breakpoints}divide-${Color}`;

/** https://tailwindcss.com/docs/divide-opacity */
type DivideOpacity = `${Breakpoints}divide-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/divide-style */
type DivideStyle = `${Breakpoints}divide-${'solid' | 'dashed' | 'dotted' | 'double' | 'none'}`;

/** https://tailwindcss.com/docs/ring-width */
type RingWidth = `${Breakpoints}ring` | `${Breakpoints}ring-${0 | 1 | 2 | 4 | 8 | 'inset'}`;

/** https://tailwindcss.com/docs/ring-color */
type RingColor = `${Breakpoints}ring-${Color}`;

/** https://tailwindcss.com/docs/ring-opacity */
type RingOpacity = `${Breakpoints}ring-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/ring-offset-width */
type RingOffsetWidth = `${Breakpoints}ring-offset-${0 | 1 | 2 | 4 | 8}`;

/** https://tailwindcss.com/docs/ring-offset-color */
type RingOffsetColor = `${Breakpoints}ring-offset-${Color}`;

/** https://tailwindcss.com/docs/box-shadow */
type BoxShadow =
  | `${Breakpoints}shadow`
  | `${Breakpoints}shadow-${'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'}`;

/** https://tailwindcss.com/docs/opacity */
type Opacity = `${Breakpoints}opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/mix-blend-mode */
type MixBlendMode = `${Breakpoints}mix-blend-${BlendMode}`;

/** https://tailwindcss.com/docs/background-blend-mode */
type BackgroundBlendMode = `${Breakpoints}bg-blend-${BlendMode}`;

/** https://tailwindcss.com/docs/filter */
type Filter = `${Breakpoints}filter` | `${Breakpoints}filter-none`;

/** https://tailwindcss.com/docs/blur */
type Blur = `${Breakpoints}blur` | `${Breakpoints}blur-${'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'}`;

/** https://tailwindcss.com/docs/brightness */
type Brightness = `${Breakpoints}brightness-${BrightnessAmount}`;

/** https://tailwindcss.com/docs/contrast */
type Contrast = `${Breakpoints}contrast-${ContrastAmount}`;

/** https://tailwindcss.com/docs/drop-shadow */
type DropShadow = `${Breakpoints}shadow` | `${Breakpoints}shadow-${'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'}`;

/** https://tailwindcss.com/docs/grayscale */
type Grayscale = `${Breakpoints}grayscale` | `${Breakpoints}grayscale-0`;

/** https://tailwindcss.com/docs/hue-rotate */
type HueRotate = `${Breakpoints}${'-' | ''}hue-rotate-${HueRotateAmount}`;

/** https://tailwindcss.com/docs/invert */
type Invert = `${Breakpoints}invert` | `${Breakpoints}invert-0`;

/** https://tailwindcss.com/docs/saturate */
type Saturate = `${Breakpoints}saturate-${0 | 50 | 100 | 150 | 200}`;

/** https://tailwindcss.com/docs/sepia */
type Sepia = `${Breakpoints}sepia` | `${Breakpoints}sepia-0`;

/** https://tailwindcss.com/docs/backdrop-filter */
type BackdropFilter = `${Breakpoints}backdrop-filter` | `${Breakpoints}backdrop-filter-none`;

/** https://tailwindcss.com/docs/backdrop-blur */
type BackdropBlur =
  | `${Breakpoints}backdrop-blur`
  | `${Breakpoints}backdrop-blur-${'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'}`;

/** https://tailwindcss.com/docs/backdrop-brightness */
type BackdropBrightness = `${Breakpoints}backdrop-brightness-${BrightnessAmount}`;

/** https://tailwindcss.com/docs/backdrop-contrast */
type BackdropContrast = `${Breakpoints}backdrop-contrast-${ContrastAmount}`;

/** https://tailwindcss.com/docs/backdrop-grayscale */
type BackdropGrayscale = `${Breakpoints}backdrop-grayscale` | `${Breakpoints}backdrop-grayscale-0`;

/** https://tailwindcss.com/docs/backdrop-hue-rotate */
type BackdropHueRotate = `${Breakpoints}${'-' | ''}backdrop-hue-rotate-${HueRotateAmount}`;

/** https://tailwindcss.com/docs/backdrop-invert */
type BackdropInvert = `${Breakpoints}backdrop-invert` | `${Breakpoints}backdrop-invert-0`;

/** https://tailwindcss.com/docs/backdrop-opacity */
type BackdropOpacity = `${Breakpoints}backdrop-opacity-${OpacityAmount}`;

/** https://tailwindcss.com/docs/backdrop-saturate */
type BackdropSaturate = `${Breakpoints}backdrop-saturate-${0 | 50 | 100 | 150 | 200}`;

/** https://tailwindcss.com/docs/backdrop-sepia */
type BackdropSepia = `${Breakpoints}backdrop-sepia` | `${Breakpoints}backdrop-sepia-0`;

/** https://tailwindcss.com/docs/border-collapse */
type BorderCollapse = `${Breakpoints}border-${'collapse' | 'separate'}`;

/** https://tailwindcss.com/docs/table-layout */
type TableLayout = `${Breakpoints}table-${'auto' | 'fixed'}`;

/** https://tailwindcss.com/docs/transition-property */
type TransitionProperty =
  | `${Breakpoints}transition`
  | `${Breakpoints}transition-${'none' | 'all' | 'colors' | 'opacity' | 'shadow' | 'transform'}`;

/** https://tailwindcss.com/docs/transition-duration */
type TransitionDuration = `${Breakpoints}duration-${TransitionAmount}`;

/** https://tailwindcss.com/docs/transition-timing-function */
type TransitionTimingFunction = `${Breakpoints}ease-${'linear' | 'in' | 'out' | 'in-out'}`;

/** https://tailwindcss.com/docs/transition-delay */
type TransitionDelay = `${Breakpoints}delay-${TransitionAmount}`;

/** https://tailwindcss.com/docs/animation */
type Animation = `${Breakpoints}animate-${'none' | 'spin' | 'ping' | 'pulse' | 'bounce'}`;

/** https://tailwindcss.com/docs/transform */
type Transform = `${Breakpoints}transform${'-gpu' | '-none' | ''}`;

/** https://tailwindcss.com/docs/transform-origin */
type TransformOrigin = `${Breakpoints}origin-${
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
type Scale = `${Breakpoints}scale${'-x' | '-y' | ''}-${0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150}`;

/** https://tailwindcss.com/docs/rotate */
type Rotate = `${Breakpoints}${'-' | ''}rotate-${0 | 1 | 2 | 3 | 6 | 12 | 45 | 90 | 180}`;

/** https://tailwindcss.com/docs/translate */
type Translate = `${Breakpoints}${'-' | ''}translate${'-x' | '-y' | ''}-${
  | Size
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | 'full'}`;

/** https://tailwindcss.com/docs/skew */
type Skew = `${Breakpoints}${'-' | ''}skew${'-x' | '-y' | ''}-${0 | 1 | 2 | 3 | 6 | 12}`;

/** https://tailwindcss.com/docs/appearance */
type Appearance = `${Breakpoints}appearance-none`;

/** https://tailwindcss.com/docs/cursor */
type Cursor = `${Breakpoints}cursor-${
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'help'
  | 'not-allowed'}`;

/** https://tailwindcss.com/docs/outline */
type Outline = `${Breakpoints}outline-${'none' | 'white' | 'black'}`;

/** https://tailwindcss.com/docs/pointer-events */
type PointerEvents = `${Breakpoints}pointer-events-${'none' | 'auto'}`;

/** https://tailwindcss.com/docs/resize */
type Resize = `${Breakpoints}resize` | `${Breakpoints}resize-${'none' | 'y' | 'x'}`;

/** https://tailwindcss.com/docs/user-select */
type UserSelect = `${Breakpoints}select-${'none' | 'text' | 'all' | 'auto'}`;

/** https://tailwindcss.com/docs/fill */
type Fill = `${Breakpoints}fill-current`;

/** https://tailwindcss.com/docs/stroke */
type Stroke = `${Breakpoints}stroke-current`;

/** https://tailwindcss.com/docs/stroke-width */
type StrokeWidth = `${Breakpoints}stroke-${0 | 1 | 2}`;

/** https://tailwindcss.com/docs/screen-readers */
type ScreenReaders = `${Breakpoints}sr-only` | `${Breakpoints}not-sr-only`;

export type TailwindClass =
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
  | FontFamily
  | FontSize
  | FontSmoothing
  | FontStyle
  | FontWeight
  | FontVariantNumeric
  | LetterSpacing
  | LineHeight
  | ListStyleType
  | ListStylePosition
  | PlaceholderColor
  | TextAlign
  | TextColor
  | TextOpacity
  | TextDecoration
  | TextTransform
  | TextOverflow
  | VerticalAlign
  | Whitespace
  | WordBreak
  | BackgroundAttachment
  | BackgroundClip
  | BackgroundColor
  | BackgroundOpacity
  | BackgroundOrigin
  | BackgroundPosition
  | BackgroundRepeat
  | BackgroundSize
  | BackgroundImage
  | GradientColorStops
  | BorderRadius
  | BorderWidth
  | BorderColor
  | BorderOpacity
  | BorderStyle
  | DivideWidth
  | DivideColor
  | DivideOpacity
  | DivideStyle
  | RingWidth
  | RingColor
  | RingOpacity
  | RingOffsetWidth
  | RingOffsetColor
  | BoxShadow
  | Opacity
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
  | BackdropOpacity
  | BackdropSaturate
  | BackdropSepia
  | BorderCollapse
  | TableLayout
  | TransitionProperty
  | TransitionDuration
  | TransitionTimingFunction
  | TransitionDelay
  | Animation
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
  | ScreenReaders;

export type TailwindClassValue =
  | TailwindClassDictionary
  | TailwindClassArray
  | TailwindClass
  | null
  | boolean
  | undefined;

export type TailwindClassDictionary = {
  [id in TailwindClass]?: boolean;
};

export interface TailwindClassArray extends Array<TailwindClassValue> {}

export const tw: (...args: TailwindClassValue[]) => string = clsx;
