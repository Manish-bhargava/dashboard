export const competencyData = [
  { subject: "Leadership", A: 120, B: 110, C: 140, D: 90, fullMark: 150 },
  { subject: "Situation Management", A: 98, B: 130, C: 110, D: 100, fullMark: 150 },
  { subject: "Quality of Healthcare", A: 86, B: 130, C: 70, D: 120, fullMark: 150 },
  { subject: "Relationship Building", A: 99, B: 100, C: 120, D: 110, fullMark: 150 },
]

export const subCompetencyLeadership = [
  { subject: "Mentoring", A: 110, B: 90, C: 120, D: 85, fullMark: 150 },
  { subject: "Taking Initiative", A: 130, B: 100, C: 130, D: 95, fullMark: 150 },
  { subject: "Conflict Management", A: 90, B: 120, C: 100, D: 110, fullMark: 150 },
  { subject: "Ambition", A: 105, B: 95, C: 125, D: 100, fullMark: 150 },
]

export const subCompetencySituation = [
  { subject: "Crisis Response", A: 95, B: 125, C: 105, D: 90, fullMark: 150 },
  { subject: "Decision Making", A: 100, B: 135, C: 115, D: 105, fullMark: 150 },
  { subject: "Resource Allocation", A: 105, B: 130, C: 100, D: 95, fullMark: 150 },
  { subject: "Stress Management", A: 90, B: 125, C: 120, D: 110, fullMark: 150 },
]

export const subCompetencyQuality = [
  { subject: "Patient Safety", A: 90, B: 135, C: 75, D: 125, fullMark: 150 },
  { subject: "Protocol Adherence", A: 85, B: 130, C: 70, D: 120, fullMark: 150 },
  { subject: "Documentation", A: 80, B: 125, C: 65, D: 115, fullMark: 150 },
  { subject: "Continuous Improvement", A: 90, B: 130, C: 75, D: 120, fullMark: 150 },
]

export const subCompetencyRelationship = [
  { subject: "Patient Communication", A: 105, B: 95, C: 125, D: 115, fullMark: 150 },
  { subject: "Team Collaboration", A: 100, B: 105, C: 120, D: 110, fullMark: 150 },
  { subject: "Conflict Resolution", A: 95, B: 100, C: 115, D: 105, fullMark: 150 },
  { subject: "Empathy", A: 95, B: 100, C: 120, D: 110, fullMark: 150 },
]

export const barData = [
  { name: "Unit A", Leadership: 120, SituationManagement: 98, QualityOfHealthcare: 86, RelationshipBuilding: 99 },
  { name: "Unit B", Leadership: 110, SituationManagement: 130, QualityOfHealthcare: 130, RelationshipBuilding: 100 },
  { name: "Unit C", Leadership: 140, SituationManagement: 110, QualityOfHealthcare: 70, RelationshipBuilding: 120 },
  { name: "Unit D", Leadership: 90, SituationManagement: 100, QualityOfHealthcare: 120, RelationshipBuilding: 110 },
  { name: "Unit E", Leadership: 105, SituationManagement: 115, QualityOfHealthcare: 95, RelationshipBuilding: 105 },
]

export const heatMapData = [
  { unit: "Unit A", Leadership: 80, SituationManagement: 65, QualityOfHealthcare: 72, RelationshipBuilding: 88 },
  { unit: "Unit B", Leadership: 75, SituationManagement: 82, QualityOfHealthcare: 91, RelationshipBuilding: 70 },
  { unit: "Unit C", Leadership: 92, SituationManagement: 78, QualityOfHealthcare: 53, RelationshipBuilding: 85 },
  { unit: "Unit D", Leadership: 68, SituationManagement: 71, QualityOfHealthcare: 84, RelationshipBuilding: 79 },
  { unit: "Unit E", Leadership: 88, SituationManagement: 75, QualityOfHealthcare: 90, RelationshipBuilding: 72 },
]

export const topPerformers = [
  { rank: 1, unit: "Unit C", competency: "Leadership", score: 92 },
  { rank: 2, unit: "Unit B", competency: "Quality of Healthcare", score: 91 },
  { rank: 3, unit: "Unit E", competency: "Quality of Healthcare", score: 90 },
  { rank: 4, unit: "Unit A", competency: "Relationship Building", score: 88 },
  { rank: 5, unit: "Unit E", competency: "Leadership", score: 88 },
]

export const regions = ["North", "South", "East", "West"]
export const units = ["Unit A", "Unit B", "Unit C", "Unit D", "Unit E"]
export const departments = ["Nursing", "Administration", "Emergency", "Surgery", "ICU"]
export const mainCompetencies = ["Leadership", "Situation Management", "Quality of Healthcare", "Relationship Building"]

export const subCompetenciesMap = {
  Leadership: ["Mentoring", "Taking Initiative", "Conflict Management", "Ambition"],
  "Situation Management": ["Crisis Response", "Decision Making", "Resource Allocation", "Stress Management"],
  "Quality of Healthcare": ["Patient Safety", "Protocol Adherence", "Documentation", "Continuous Improvement"],
  "Relationship Building": ["Patient Communication", "Team Collaboration", "Conflict Resolution", "Empathy"],
} 