"use client"

import { useState } from "react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell,
  AreaChart,
  Area,
  LabelList,
} from "recharts"
import { Activity, BarChart2, PieChart, Map, Circle, ChevronDown, CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Label } from "./components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./components/ui/command"
import { Badge } from "./components/ui/badge"
import { ScrollArea } from "./components/ui/scroll-area"
import { Checkbox } from "./components/ui/checkbox"
import { Calendar } from "./components/ui/calendar"

import { SidebarProvider } from "./components/sidebar/sidebar-provider"
import { Sidebar } from "./components/sidebar/sidebar"
import { SidebarHeader } from "./components/sidebar/sidebar-header"
import { SidebarContent } from "./components/sidebar/sidebar-content"
import { SidebarFooter } from "./components/sidebar/sidebar-footer"
import { SidebarTrigger } from "./components/sidebar/sidebar-trigger"
import { SidebarMenu } from "./components/sidebar/sidebar-menu"
import { SidebarMenuItem } from "./components/sidebar/sidebar-menu-item"
import { SidebarMenuButton } from "./components/sidebar/sidebar-menu-button"
import { SidebarGroup } from "./components/sidebar/sidebar-group"
import { SidebarGroupLabel } from "./components/sidebar/sidebar-group-label"
import { SidebarGroupContent } from "./components/sidebar/sidebar-group-content"

// Sample data
const competencyData = [
  { subject: "Leadership", A: 120, B: 110, C: 140, D: 90, fullMark: 150 },
  { subject: "Situation Management", A: 98, B: 130, C: 110, D: 100, fullMark: 150 },
  { subject: "Quality of Healthcare", A: 86, B: 130, C: 70, D: 120, fullMark: 150 },
  { subject: "Relationship Building", A: 99, B: 100, C: 120, D: 110, fullMark: 150 },
]

const subCompetencyLeadership = [
  { subject: "Mentoring", A: 110, B: 90, C: 120, D: 85, fullMark: 150 },
  { subject: "Taking Initiative", A: 130, B: 100, C: 130, D: 95, fullMark: 150 },
  { subject: "Conflict Management", A: 90, B: 120, C: 100, D: 110, fullMark: 150 },
  { subject: "Ambition", A: 105, B: 95, C: 125, D: 100, fullMark: 150 },
]

const subCompetencySituation = [
  { subject: "Crisis Response", A: 95, B: 125, C: 105, D: 90, fullMark: 150 },
  { subject: "Decision Making", A: 100, B: 135, C: 115, D: 105, fullMark: 150 },
  { subject: "Resource Allocation", A: 105, B: 130, C: 100, D: 95, fullMark: 150 },
  { subject: "Stress Management", A: 90, B: 125, C: 120, D: 110, fullMark: 150 },
]

const subCompetencyQuality = [
  { subject: "Patient Safety", A: 90, B: 135, C: 75, D: 125, fullMark: 150 },
  { subject: "Protocol Adherence", A: 85, B: 130, C: 70, D: 120, fullMark: 150 },
  { subject: "Documentation", A: 80, B: 125, C: 65, D: 115, fullMark: 150 },
  { subject: "Continuous Improvement", A: 90, B: 130, C: 75, D: 120, fullMark: 150 },
]

const subCompetencyRelationship = [
  { subject: "Patient Communication", A: 105, B: 95, C: 125, D: 115, fullMark: 150 },
  { subject: "Team Collaboration", A: 100, B: 105, C: 120, D: 110, fullMark: 150 },
  { subject: "Conflict Resolution", A: 95, B: 100, C: 115, D: 105, fullMark: 150 },
  { subject: "Empathy", A: 95, B: 100, C: 120, D: 110, fullMark: 150 },
]

const barData = [
  { name: "Unit A", Leadership: 120, SituationManagement: 98, QualityOfHealthcare: 86, RelationshipBuilding: 99 },
  { name: "Unit B", Leadership: 110, SituationManagement: 130, QualityOfHealthcare: 130, RelationshipBuilding: 100 },
  { name: "Unit C", Leadership: 140, SituationManagement: 110, QualityOfHealthcare: 70, RelationshipBuilding: 120 },
  { name: "Unit D", Leadership: 90, SituationManagement: 100, QualityOfHealthcare: 120, RelationshipBuilding: 110 },
  { name: "Unit E", Leadership: 105, SituationManagement: 115, QualityOfHealthcare: 95, RelationshipBuilding: 105 },
]

const subBarDataLeadership = [
  { name: "Unit A", Mentoring: 110, Initiative: 130, ConflictManagement: 90, Ambition: 105 },
  { name: "Unit B", Mentoring: 90, Initiative: 100, ConflictManagement: 120, Ambition: 95 },
  { name: "Unit C", Mentoring: 120, Initiative: 130, ConflictManagement: 100, Ambition: 125 },
  { name: "Unit D", Mentoring: 85, Initiative: 95, ConflictManagement: 110, Ambition: 100 },
  { name: "Unit E", Mentoring: 95, Initiative: 110, ConflictManagement: 105, Ambition: 115 },
]

const subBarDataSituation = [
  { name: "Unit A", CrisisResponse: 95, DecisionMaking: 100, ResourceAllocation: 105, StressManagement: 90 },
  { name: "Unit B", CrisisResponse: 125, DecisionMaking: 135, ResourceAllocation: 130, StressManagement: 125 },
  { name: "Unit C", CrisisResponse: 105, DecisionMaking: 115, ResourceAllocation: 100, StressManagement: 120 },
  { name: "Unit D", CrisisResponse: 90, DecisionMaking: 105, ResourceAllocation: 95, StressManagement: 110 },
  { name: "Unit E", CrisisResponse: 110, DecisionMaking: 120, ResourceAllocation: 115, StressManagement: 105 },
]

const heatMapData = [
  { unit: "Unit A", Leadership: 80, SituationManagement: 65, QualityOfHealthcare: 72, RelationshipBuilding: 88 },
  { unit: "Unit B", Leadership: 75, SituationManagement: 82, QualityOfHealthcare: 91, RelationshipBuilding: 70 },
  { unit: "Unit C", Leadership: 92, SituationManagement: 78, QualityOfHealthcare: 53, RelationshipBuilding: 85 },
  { unit: "Unit D", Leadership: 68, SituationManagement: 71, QualityOfHealthcare: 84, RelationshipBuilding: 79 },
  { unit: "Unit E", Leadership: 88, SituationManagement: 75, QualityOfHealthcare: 90, RelationshipBuilding: 72 },
]

const heatMapPercentileData = [
  { unit: "Unit A", Leadership: 75, SituationManagement: 60, QualityOfHealthcare: 68, RelationshipBuilding: 82 },
  { unit: "Unit B", Leadership: 70, SituationManagement: 78, QualityOfHealthcare: 88, RelationshipBuilding: 65 },
  { unit: "Unit C", Leadership: 90, SituationManagement: 73, QualityOfHealthcare: 48, RelationshipBuilding: 80 },
  { unit: "Unit D", Leadership: 63, SituationManagement: 67, QualityOfHealthcare: 79, RelationshipBuilding: 74 },
  { unit: "Unit E", Leadership: 83, SituationManagement: 70, QualityOfHealthcare: 85, RelationshipBuilding: 67 },
]

const talentDistributionUnitData = [
  { score: 50, "Unit A": 5, "Unit B": 8, "Unit C": 3, "Unit D": 6, "Unit E": 4 },
  { score: 60, "Unit A": 10, "Unit B": 12, "Unit C": 8, "Unit D": 9, "Unit E": 11 },
  { score: 70, "Unit A": 15, "Unit B": 10, "Unit C": 12, "Unit D": 14, "Unit E": 13 },
  { score: 80, "Unit A": 20, "Unit B": 15, "Unit C": 18, "Unit D": 16, "Unit E": 17 },
  { score: 90, "Unit A": 12, "Unit B": 8, "Unit C": 15, "Unit D": 10, "Unit E": 9 },
  { score: 100, "Unit A": 5, "Unit B": 3, "Unit C": 7, "Unit D": 4, "Unit E": 5 },
]

const talentDistributionDeptData = [
  { score: 50, Nursing: 4, Administration: 7, Emergency: 3, Surgery: 5, ICU: 6 },
  { score: 60, Nursing: 8, Administration: 10, Emergency: 7, Surgery: 9, ICU: 8 },
  { score: 70, Nursing: 14, Administration: 12, Emergency: 10, Surgery: 13, ICU: 11 },
  { score: 80, Nursing: 18, Administration: 14, Emergency: 16, Surgery: 15, ICU: 17 },
  { score: 90, Nursing: 10, Administration: 7, Emergency: 12, Surgery: 9, ICU: 11 },
  { score: 100, Nursing: 4, Administration: 3, Emergency: 6, Surgery: 3, ICU: 5 },
]

const bubbleData = [
  // Unit A
  { x: 1, y: 1, z: 80, count: 25, name: "Unit A", competency: "Leadership" },
  { x: 1, y: 2, z: 65, count: 18, name: "Unit A", competency: "Situation Management" },
  { x: 1, y: 3, z: 72, count: 22, name: "Unit A", competency: "Quality of Healthcare" },
  { x: 1, y: 4, z: 88, count: 30, name: "Unit A", competency: "Relationship Building" },

  // Unit B
  { x: 2, y: 1, z: 75, count: 20, name: "Unit B", competency: "Leadership" },
  { x: 2, y: 2, z: 82, count: 28, name: "Unit B", competency: "Situation Management" },
  { x: 2, y: 3, z: 91, count: 35, name: "Unit B", competency: "Quality of Healthcare" },
  { x: 2, y: 4, z: 70, count: 15, name: "Unit B", competency: "Relationship Building" },

  // Unit C
  { x: 3, y: 1, z: 92, count: 40, name: "Unit C", competency: "Leadership" },
  { x: 3, y: 2, z: 78, count: 25, name: "Unit C", competency: "Situation Management" },
  { x: 3, y: 3, z: 53, count: 12, name: "Unit C", competency: "Quality of Healthcare" },
  { x: 3, y: 4, z: 85, count: 32, name: "Unit C", competency: "Relationship Building" },

  // Unit D
  { x: 4, y: 1, z: 68, count: 22, name: "Unit D", competency: "Leadership" },
  { x: 4, y: 2, z: 71, count: 19, name: "Unit D", competency: "Situation Management" },
  { x: 4, y: 3, z: 84, count: 28, name: "Unit D", competency: "Quality of Healthcare" },
  { x: 4, y: 4, z: 79, count: 24, name: "Unit D", competency: "Relationship Building" },

  // Unit E
  { x: 5, y: 1, z: 88, count: 30, name: "Unit E", competency: "Leadership" },
  { x: 5, y: 2, z: 75, count: 20, name: "Unit E", competency: "Situation Management" },
  { x: 5, y: 3, z: 90, count: 33, name: "Unit E", competency: "Quality of Healthcare" },
  { x: 5, y: 4, z: 72, count: 18, name: "Unit E", competency: "Relationship Building" },
]

const topPerformers = [
  { rank: 1, unit: "Unit C", competency: "Leadership", score: 92 },
  { rank: 2, unit: "Unit B", competency: "Quality of Healthcare", score: 91 },
  { rank: 3, unit: "Unit E", competency: "Quality of Healthcare", score: 90 },
  { rank: 4, unit: "Unit A", competency: "Relationship Building", score: 88 },
  { rank: 5, unit: "Unit E", competency: "Leadership", score: 88 },
]

const regions = ["North", "South", "East", "West"]
const units = ["Unit A", "Unit B", "Unit C", "Unit D", "Unit E"]
const departments = ["Nursing", "Administration", "Emergency", "Surgery", "ICU"]
const mainCompetencies = ["Leadership", "Situation Management", "Quality of Healthcare", "Relationship Building"]
const subCompetenciesMap = {
  Leadership: ["Mentoring", "Taking Initiative", "Conflict Management", "Ambition"],
  "Situation Management": ["Crisis Response", "Decision Making", "Resource Allocation", "Stress Management"],
  "Quality of Healthcare": ["Patient Safety", "Protocol Adherence", "Documentation", "Continuous Improvement"],
  "Relationship Building": ["Patient Communication", "Team Collaboration", "Conflict Resolution", "Empathy"],
}

// Color scale for heat map
const getColorByValue = (value) => {
  if (value >= 90) return "#10b981" // Green
  if (value >= 80) return "#22c55e"
  if (value >= 70) return "#84cc16"
  if (value >= 60) return "#eab308" // Yellow
  if (value >= 50) return "#f59e0b"
  if (value >= 40) return "#f97316"
  return "#ef4444" // Red
}

// Custom tooltip for charts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

// Multi-select component for units and regions
function MultiSelect({ options, value, onChange, placeholder, showCheckAll = false }) {
  const [open, setOpen] = useState(false)

  const handleSelect = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
    } else {
      onChange([...value, option])
    }
  }

  const handleSelectAll = () => {
    if (value.length === options.length) {
      onChange([])
    } else {
      onChange([...options])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="w-full justify-between">
          {value.length > 0 ? (
            <div className="flex flex-wrap gap-1 max-w-[90%] overflow-hidden">
              {value.length <= 2 ? (
                value.map((item) => (
                  <Badge key={item} variant="secondary" className="mr-1">
                    {item}
                  </Badge>
                ))
              ) : (
                <>
                  <Badge variant="secondary" className="mr-1">
                    {value[0]}
                  </Badge>
                  <Badge variant="secondary">+{value.length - 1} more</Badge>
                </>
              )}
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {showCheckAll && (
                <CommandItem onSelect={handleSelectAll} className="flex items-center gap-2">
                  <Checkbox checked={value.length === options.length} onCheckedChange={handleSelectAll} />
                  <span className="font-medium">{value.length === options.length ? "Unselect All" : "Select All"}</span>
                </CommandItem>
              )}
              <ScrollArea className="h-[200px]">
                {options.map((option) => (
                  <CommandItem key={option} onSelect={() => handleSelect(option)} className="flex items-center gap-2">
                    <Checkbox checked={value.includes(option)} onCheckedChange={() => handleSelect(option)} />
                    {option}
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

// Radar Chart Component
function RadarChartView({ selectedRegions, selectedUnits }) {
  const [selectedCompetencies, setSelectedCompetencies] = useState(["Leadership"])
  const [selectedSubCompetencies, setSelectedSubCompetencies] = useState([])
  const [viewMode, setViewMode] = useState("absolute")

  // Choose data based on selected competencies
  let data
  if (selectedSubCompetencies.length > 0) {
    // Show sub-competency data
    if (selectedCompetencies.includes("Leadership")) {
      data = subCompetencyLeadership
    } else if (selectedCompetencies.includes("Situation Management")) {
      data = subCompetencySituation
    } else if (selectedCompetencies.includes("Quality of Healthcare")) {
      data = subCompetencyQuality
    } else if (selectedCompetencies.includes("Relationship Building")) {
      data = subCompetencyRelationship
    } else {
      data = subCompetencyLeadership
    }
  } else {
    // Show main competency data
    data = competencyData
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Radar Chart - Competency Overview</CardTitle>
        <CardDescription>
          {selectedSubCompetencies.length > 0
            ? `Drill down into ${selectedCompetencies[0]} sub-competencies`
            : "Comparison of main competencies across units"}
        </CardDescription>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="competency-select">Competency:</Label>
            <MultiSelect
              options={mainCompetencies}
              value={selectedCompetencies}
              onChange={setSelectedCompetencies}
              placeholder="Select Competencies"
            />
          </div>

          {selectedCompetencies.length === 1 && (
            <div className="flex items-center space-x-2">
              <Label htmlFor="sub-competency-select">Sub-Competency:</Label>
              <MultiSelect
                options={subCompetenciesMap[selectedCompetencies[0]] || []}
                value={selectedSubCompetencies}
                onChange={setSelectedSubCompetencies}
                placeholder="Select Sub-Competencies"
              />
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode-radar">View Mode:</Label>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger id="view-mode-radar" className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute Score</SelectItem>
                <SelectItem value="percentile">Percentile Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[400px]">
        {selectedUnits.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={150} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} label={{ position: "outside", fill: "#666" }} />
              <Radar name="Unit A" dataKey="A" stroke="#8884d8" fill="none" dot={true} strokeWidth={3} />
              <Radar name="Unit B" dataKey="B" stroke="#82ca9d" fill="none" dot={true} strokeWidth={3} />
              <Radar name="Unit C" dataKey="C" stroke="#ffc658" fill="none" dot={true} strokeWidth={3} />
              <Radar name="Unit D" dataKey="D" stroke="#ff8042" fill="none" dot={true} strokeWidth={3} />
              <Legend />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Please select at least one unit to view the chart</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Bar Chart Component
function GroupedBarChart({ selectedRegions, selectedUnits }) {
  const [selectedCompetencies, setSelectedCompetencies] = useState(["Leadership"])
  const [selectedSubCompetencies, setSelectedSubCompetencies] = useState([])
  const [viewMode, setViewMode] = useState("absolute")

  // Choose data based on selected competencies
  let data
  let dataKeys = []

  if (selectedSubCompetencies.length > 0) {
    // Show sub-competency data
    if (selectedCompetencies.includes("Leadership")) {
      data = subBarDataLeadership
      dataKeys = selectedSubCompetencies
        .map((sc) => {
          switch (sc) {
            case "Mentoring":
              return "Mentoring"
            case "Taking Initiative":
              return "Initiative"
            case "Conflict Management":
              return "ConflictManagement"
            case "Ambition":
              return "Ambition"
            default:
              return ""
          }
        })
        .filter(Boolean)
    } else if (selectedCompetencies.includes("Situation Management")) {
      data = subBarDataSituation
      dataKeys = selectedSubCompetencies
        .map((sc) => {
          switch (sc) {
            case "Crisis Response":
              return "CrisisResponse"
            case "Decision Making":
              return "DecisionMaking"
            case "Resource Allocation":
              return "ResourceAllocation"
            case "Stress Management":
              return "StressManagement"
            default:
              return ""
          }
        })
        .filter(Boolean)
    } else {
      data = subBarDataLeadership
      dataKeys = []
    }
  } else {
    // Show main competency data
    data = barData
    dataKeys = selectedCompetencies
      .map((c) => {
        switch (c) {
          case "Leadership":
            return "Leadership"
          case "Situation Management":
            return "SituationManagement"
          case "Quality of Healthcare":
            return "QualityOfHealthcare"
          case "Relationship Building":
            return "RelationshipBuilding"
          default:
            return ""
        }
      })
      .filter(Boolean)
  }

  // Calculate system-wide averages for benchmark line
  const benchmarks = {}
  dataKeys.forEach((key) => {
    benchmarks[key] = data.reduce((sum, item) => sum + (item[key] || 0), 0) / data.length
  })

  // Colors for bars
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Grouped Bar Chart - Unit Performance</CardTitle>
        <CardDescription>
          {selectedSubCompetencies.length > 0
            ? `Drill down into ${selectedCompetencies[0]} sub-competencies`
            : "Comparison of main competencies across units"}
        </CardDescription>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="competency-select-bar">Competency:</Label>
            <MultiSelect
              options={mainCompetencies}
              value={selectedCompetencies}
              onChange={setSelectedCompetencies}
              placeholder="Select Competencies"
            />
          </div>

          {selectedCompetencies.length === 1 && (
            <div className="flex items-center space-x-2">
              <Label htmlFor="sub-competency-select-bar">Sub-Competency:</Label>
              <MultiSelect
                options={subCompetenciesMap[selectedCompetencies[0]] || []}
                value={selectedSubCompetencies}
                onChange={setSelectedSubCompetencies}
                placeholder="Select Sub-Competencies"
                showCheckAll={true}
              />
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode-bar">View Mode:</Label>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger id="view-mode-bar" className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute Score</SelectItem>
                <SelectItem value="percentile">Percentile Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[400px]">
        {selectedUnits.length > 0 && dataKeys.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" label={{ value: "Units", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              {dataKeys.map((key, index) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                  name={key.replace(/([A-Z])/g, " $1").trim()}
                >
                  <LabelList dataKey={key} position="top" />
                </Bar>
              ))}

              {dataKeys.length > 0 && (
                <ReferenceLine y={benchmarks[dataKeys[0]]} stroke={colors[0]} strokeDasharray="3 3" label="Avg" />
              )}
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              {selectedUnits.length === 0
                ? "Please select at least one unit to view the chart"
                : "Please select at least one competency to view the chart"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Heat Map Component
function HeatMapChart({ selectedRegions, selectedUnits }) {
  const [selectedCompetencies, setSelectedCompetencies] = useState(mainCompetencies)
  const [selectedSubCompetencies, setSelectedSubCompetencies] = useState([])
  const [viewMode, setViewMode] = useState("absolute")

  // Choose data based on view mode
  const data = viewMode === "absolute" ? heatMapData : heatMapPercentileData

  // Filter data based on selected units
  const filteredData = data.filter((item) => selectedUnits.includes(item.unit))

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Heat Map - Performance Scores</CardTitle>
        <CardDescription>Color-coded visualization of performance scores across competencies</CardDescription>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="competency-select-heat">Competency:</Label>
            <MultiSelect
              options={mainCompetencies}
              value={selectedCompetencies}
              onChange={setSelectedCompetencies}
              placeholder="Select Competencies"
              showCheckAll={true}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode-heat">View Mode:</Label>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger id="view-mode-heat" className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute Score</SelectItem>
                <SelectItem value="percentile">Percentile Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {selectedUnits.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 bg-gray-100">Unit</th>
                  {selectedCompetencies.includes("Leadership") && (
                    <th className="border p-2 bg-gray-100">Leadership</th>
                  )}
                  {selectedCompetencies.includes("Situation Management") && (
                    <th className="border p-2 bg-gray-100">Situation Management</th>
                  )}
                  {selectedCompetencies.includes("Quality of Healthcare") && (
                    <th className="border p-2 bg-gray-100">Quality of Healthcare</th>
                  )}
                  {selectedCompetencies.includes("Relationship Building") && (
                    <th className="border p-2 bg-gray-100">Relationship Building</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2 font-medium">{item.unit}</td>
                    {selectedCompetencies.includes("Leadership") && (
                      <td
                        className="border p-2 text-center"
                        style={{
                          backgroundColor: getColorByValue(item.Leadership),
                          color: item.Leadership >= 70 ? "white" : "black",
                        }}
                      >
                        {viewMode === "percentile" ? `${item.Leadership}%` : item.Leadership}
                      </td>
                    )}
                    {selectedCompetencies.includes("Situation Management") && (
                      <td
                        className="border p-2 text-center"
                        style={{
                          backgroundColor: getColorByValue(item.SituationManagement),
                          color: item.SituationManagement >= 70 ? "white" : "black",
                        }}
                      >
                        {viewMode === "percentile" ? `${item.SituationManagement}%` : item.SituationManagement}
                      </td>
                    )}
                    {selectedCompetencies.includes("Quality of Healthcare") && (
                      <td
                        className="border p-2 text-center"
                        style={{
                          backgroundColor: getColorByValue(item.QualityOfHealthcare),
                          color: item.QualityOfHealthcare >= 70 ? "white" : "black",
                        }}
                      >
                        {viewMode === "percentile" ? `${item.QualityOfHealthcare}%` : item.QualityOfHealthcare}
                      </td>
                    )}
                    {selectedCompetencies.includes("Relationship Building") && (
                      <td
                        className="border p-2 text-center"
                        style={{
                          backgroundColor: getColorByValue(item.RelationshipBuilding),
                          color: item.RelationshipBuilding >= 70 ? "white" : "black",
                        }}
                      >
                        {viewMode === "percentile" ? `${item.RelationshipBuilding}%` : item.RelationshipBuilding}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
                <span className="text-sm">Below 60</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm mr-2"></div>
                <span className="text-sm">60-69</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm mr-2"></div>
                <span className="text-sm">70-79</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded-sm mr-2"></div>
                <span className="text-sm">80-89</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
                <span className="text-sm">90-100</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <p className="text-muted-foreground">Please select at least one unit to view the chart</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Talent Distribution Component
function TalentDistribution({ selectedRegions, selectedUnits }) {
  const [distributionType, setDistributionType] = useState("unit")
  const [viewMode, setViewMode] = useState("absolute")

  // Filter data based on selected units
  const unitData = talentDistributionUnitData.map((item) => {
    const filteredItem = { score: item.score }
    selectedUnits.forEach((unit) => {
      if (item[unit] !== undefined) {
        filteredItem[unit] = item[unit]
      }
    })
    return filteredItem
  })

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Talent Distribution Map</CardTitle>
        <CardDescription>Distribution of talent showing concentration of high/medium/low performers</CardDescription>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="distribution-type">Distribution Type:</Label>
            <Select value={distributionType} onValueChange={setDistributionType}>
              <SelectTrigger id="distribution-type" className="w-[180px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unit">Unit-wise</SelectItem>
                <SelectItem value="department">Department-wise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode-talent">View Mode:</Label>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger id="view-mode-talent" className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute Score</SelectItem>
                <SelectItem value="percentile">Percentile Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[400px]">
        {selectedUnits.length > 0 || distributionType === "department" ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={distributionType === "unit" ? unitData : talentDistributionDeptData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="score"
                label={{ value: "Performance Score", position: "insideBottomRight", offset: -10 }}
              />
              <YAxis label={{ value: "Number of Employees", angle: -90, position: "insideLeft" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />

              {distributionType === "unit"
                ? selectedUnits.map((unit, index) => {
                    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]
                    return (
                      <Area
                        key={unit}
                        type="monotone"
                        dataKey={unit}
                        stroke={colors[index % colors.length]}
                        fill={colors[index % colors.length]}
                        fillOpacity={0.3}
                      />
                    )
                  })
                : departments.map((dept, index) => {
                    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]
                    return (
                      <Area
                        key={dept}
                        type="monotone"
                        dataKey={dept}
                        stroke={colors[index % colors.length]}
                        fill={colors[index % colors.length]}
                        fillOpacity={0.3}
                      />
                    )
                  })}
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              {distributionType === "unit"
                ? "Please select at least one unit to view the chart"
                : "Please select distribution type"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Bubble Matrix Plot Component
function BubbleMatrixPlot({ selectedRegions, selectedUnits }) {
  const [selectedCompetencies, setSelectedCompetencies] = useState(mainCompetencies)
  const [viewMode, setViewMode] = useState("absolute")

  // Filter data based on selected units and competencies
  const filteredData = bubbleData.filter(
    (item) => selectedUnits.includes(item.name) && selectedCompetencies.includes(item.competency),
  )

  // Function to get color based on competency
  const getCompetencyColor = (competency) => {
    switch (competency) {
      case "Leadership":
        return "#8884d8"
      case "Situation Management":
        return "#82ca9d"
      case "Quality of Healthcare":
        return "#ffc658"
      case "Relationship Building":
        return "#ff8042"
      default:
        return "#8884d8"
    }
  }

  // Function to get opacity based on score
  const getOpacity = (score) => {
    return 0.3 + (score / 100) * 0.7
  }

  // Custom tooltip content
  const BubbleTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border rounded-md shadow-md">
          <p className="font-medium">{data.name}</p>
          <p>Competency: {data.competency}</p>
          <p>Score: {data.z}</p>
          <p>Staff Count: {data.count}</p>
        </div>
      )
    }
    return null
  }

  // X-axis tick formatter to show unit names
  const xAxisFormatter = (value) => {
    const unitMap = { 1: "Unit A", 2: "Unit B", 3: "Unit C", 4: "Unit D", 5: "Unit E" }
    return unitMap[value] || ""
  }

  // Y-axis tick formatter to show competency names
  const yAxisFormatter = (value) => {
    const competencyMap = {
      1: "Leadership",
      2: "Situation Mgmt",
      3: "Healthcare",
      4: "Relationship",
    }
    return competencyMap[value] || ""
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Bubble Matrix Plot</CardTitle>
        <CardDescription>Visualization of performance with bubble size representing staff count</CardDescription>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="competency-select-bubble">Competency:</Label>
            <MultiSelect
              options={mainCompetencies}
              value={selectedCompetencies}
              onChange={setSelectedCompetencies}
              placeholder="Select Competencies"
              showCheckAll={true}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Label htmlFor="view-mode-bubble">View Mode:</Label>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger id="view-mode-bubble" className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="absolute">Absolute Score</SelectItem>
                <SelectItem value="percentile">Percentile Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[400px]">
        {selectedUnits.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="x"
                name="Unit"
                tickFormatter={xAxisFormatter}
                domain={[0.5, 5.5]}
                label={{ value: "Units", position: "insideBottomRight", offset: -10 }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Competency"
                tickFormatter={yAxisFormatter}
                domain={[0.5, 4.5]}
                label={{ value: "Competency Areas", angle: -90, position: "insideLeft" }}
              />
              <ZAxis type="number" dataKey="z" range={[60, 400]} name="Score" />
              <Tooltip content={<BubbleTooltip />} />
              <Legend />
              <Scatter name="Performance Matrix" data={filteredData}>
                {filteredData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getCompetencyColor(entry.competency)}
                    fillOpacity={getOpacity(entry.z)}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Please select at least one unit to view the chart</p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#8884d8] mr-2"></div>
            <span className="text-sm">Leadership</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#82ca9d] mr-2"></div>
            <span className="text-sm">Situation Management</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#ffc658] mr-2"></div>
            <span className="text-sm">Healthcare Quality</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#ff8042] mr-2"></div>
            <span className="text-sm">Relationship Building</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Bubble size:</span> Number of staff assessed
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Color opacity:</span> Score (darker = higher score)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Top Performers Table Component
function TopPerformersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Units</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Competency</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPerformers.map((performer) => (
              <TableRow key={`${performer.rank}-${performer.unit}`}>
                <TableCell className="font-medium">{performer.rank}</TableCell>
                <TableCell>{performer.unit}</TableCell>
                <TableCell>{performer.competency}</TableCell>
                <TableCell className="text-right">{performer.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("radar")
  const [selectedRegions, setSelectedRegions] = useState([])
  const [selectedUnits, setSelectedUnits] = useState([])

  // Date picker state
  const [startDate, setStartDate] = useState(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) // 30 days ago
  const [endDate, setEndDate] = useState(new Date())
  const [isStartDateOpen, setIsStartDateOpen] = useState(false)
  const [isEndDateOpen, setIsEndDateOpen] = useState(false)

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center p-4">
              <div className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Bodhi Labs</h1>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Charts</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "radar"} onClick={() => setActiveTab("radar")}>
                      <Activity />
                      <span>Radar Chart</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "bar"} onClick={() => setActiveTab("bar")}>
                      <BarChart2 />
                      <span>Box Graph</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "heat"} onClick={() => setActiveTab("heat")}>
                      <PieChart />
                      <span>Heat Map</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "talent"} onClick={() => setActiveTab("talent")}>
                      <Map />
                      <span>Talent Distribution</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive={activeTab === "bubble"} onClick={() => setActiveTab("bubble")}>
                      <Circle />
                      <span>Bubble Plot</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="text-xs text-gray-500">© 2025 Bodhi Labs</div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar with Common Filters */}
          <header className="bg-white border-b p-4">
            <div className="flex justify-between items-center">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Performance Dashboard</h1>
              <div></div> {/* Empty div for alignment */}
            </div>

            {/* Common Filters - Region, Unit, and Date Range */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="region-select" className="mb-2 block">
                  Region
                </Label>
                <MultiSelect
                  options={regions}
                  value={selectedRegions}
                  onChange={setSelectedRegions}
                  placeholder="Select Regions"
                  showCheckAll={true}
                />
              </div>
              <div>
                <Label htmlFor="unit-select" className="mb-2 block">
                  Unit
                </Label>
                <MultiSelect
                  options={units}
                  value={selectedUnits}
                  onChange={setSelectedUnits}
                  placeholder="Select Units"
                  showCheckAll={true}
                />
              </div>
              <div>
                <Label htmlFor="start-date" className="mb-2 block">
                  Start Date
                </Label>
                <Popover open={isStartDateOpen} onOpenChange={setIsStartDateOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => {
                        setStartDate(date)
                        setIsStartDateOpen(false)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="end-date" className="mb-2 block">
                  End Date
                </Label>
                <Popover open={isEndDateOpen} onOpenChange={setIsEndDateOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => {
                        setEndDate(date)
                        setIsEndDateOpen(false)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </header>

          {/* Main Dashboard Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart Area - Takes 2/3 of the space on large screens */}
              <div className="lg:col-span-2">
                {activeTab === "radar" && (
                  <RadarChartView selectedRegions={selectedRegions} selectedUnits={selectedUnits} />
                )}
                {activeTab === "bar" && (
                  <GroupedBarChart selectedRegions={selectedRegions} selectedUnits={selectedUnits} />
                )}
                {activeTab === "heat" && (
                  <HeatMapChart selectedRegions={selectedRegions} selectedUnits={selectedUnits} />
                )}
                {activeTab === "talent" && (
                  <TalentDistribution selectedRegions={selectedRegions} selectedUnits={selectedUnits} />
                )}
                {activeTab === "bubble" && (
                  <BubbleMatrixPlot selectedRegions={selectedRegions} selectedUnits={selectedUnits} />
                )}
              </div>

              {/* Top Performers Table - Takes 1/3 of the space on large screens */}
              <div>
                <TopPerformersTable />

                {/* Dashboard Info Card */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Dashboard Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Current View</h3>
                        <p className="text-sm text-gray-500">
                          {activeTab === "radar" && "Radar Chart showing competency distribution across units"}
                          {activeTab === "bar" && "Bar Chart comparing unit performance across competencies"}
                          {activeTab === "heat" && "Heat Map displaying performance scores by unit and competency"}
                          {activeTab === "talent" && "Talent Distribution showing performance and growth potential"}
                          {activeTab === "bubble" &&
                            "Bubble Plot visualizing performance with staff count representation"}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Selected Filters</h3>
                        <ul className="text-sm text-gray-500 list-disc list-inside">
                          <li>Regions: {selectedRegions.length > 0 ? selectedRegions.join(", ") : "None Selected"}</li>
                          <li>Units: {selectedUnits.length > 0 ? selectedUnits.join(", ") : "None Selected"}</li>
                          <li>
                            Date Range: {format(startDate, "MMM d, yyyy")} - {format(endDate, "MMM d, yyyy")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

