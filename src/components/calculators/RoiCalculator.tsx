
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

interface RoiMetrics {
  monthlySavings: number
  annualSavings: number
  roi: number
  paybackPeriod: number
}

export function RoiCalculator() {
  const [hourlyRate, setHourlyRate] = useState<string>("50")
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("10")
  const [setupCost, setSetupCost] = useState<string>("5000")
  const [metrics, setMetrics] = useState<RoiMetrics | null>(null)

  const calculateRoi = () => {
    const rate = parseFloat(hourlyRate)
    const hours = parseFloat(hoursPerWeek)
    const cost = parseFloat(setupCost)

    const monthlySavings = (rate * hours * 52) / 12
    const annualSavings = rate * hours * 52
    const roi = ((annualSavings - cost) / cost) * 100
    const paybackPeriod = cost / monthlySavings

    setMetrics({
      monthlySavings,
      annualSavings,
      roi,
      paybackPeriod
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Automation ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="hourlyRate">Average Hourly Rate ($)</Label>
              <Input
                id="hourlyRate"
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                placeholder="50"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hoursPerWeek">Hours Spent on Manual Tasks (per week)</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                placeholder="10"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="setupCost">Estimated Automation Setup Cost ($)</Label>
              <Input
                id="setupCost"
                type="number"
                value={setupCost}
                onChange={(e) => setSetupCost(e.target.value)}
                placeholder="5000"
              />
            </div>
          </div>
          <Button onClick={calculateRoi} size="lg">Calculate ROI</Button>
          
          {metrics && (
            <div className="grid gap-4 p-4 bg-muted rounded-lg mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Monthly Savings</Label>
                  <p className="text-2xl font-bold">${metrics.monthlySavings.toFixed(2)}</p>
                </div>
                <div>
                  <Label>Annual Savings</Label>
                  <p className="text-2xl font-bold">${metrics.annualSavings.toFixed(2)}</p>
                </div>
                <div>
                  <Label>ROI</Label>
                  <p className="text-2xl font-bold">{metrics.roi.toFixed(1)}%</p>
                </div>
                <div>
                  <Label>Payback Period</Label>
                  <p className="text-2xl font-bold">{metrics.paybackPeriod.toFixed(1)} months</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
