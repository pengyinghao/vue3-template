import * as echarts from 'echarts/core'
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers'
import {
    BarSeriesOption,
    BarChart,
    PieChart,
    LineChart,
    LineSeriesOption,
    PieSeriesOption,
    RadarChart,
    RadarSeriesOption,
    PictorialBarChart,
    LinesChart
} from 'echarts/charts'
import {
    TitleComponent,
    TitleComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    DatasetComponentOption,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
    ToolboxComponent,
    GeoComponent
} from 'echarts/components'

echarts.use([
    SVGRenderer,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    PieChart,
    RadarChart,
    LineChart,
    LegendComponent,
    DatasetComponent,
    CanvasRenderer,
    ToolboxComponent,
    PictorialBarChart,
    GeoComponent,
    LinesChart
])

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | RadarSeriesOption
    | DatasetComponentOption
    | PieSeriesOption
>
export default echarts
