import { Edge } from 'reactflow'

export default [
  // main
  { id: 'main->1101', source: 'main', target: '1101', animated: false },
  { id: 'main->1102', source: 'main', target: '1102', animated: false },
  { id: 'main->1103', source: 'main', target: '1103', animated: false },
  { id: 'main->1104', source: 'main', target: '1104', animated: false },
  { id: 'main->1105', source: 'main', target: '1105', animated: false },
  { id: 'main->1106', source: 'main', target: '1106', animated: false },

  // ciclo 1
  { id: '1101->1201', source: '1101', target: '1201', animated: false },
  { id: '1101->1202', source: '1101', target: '1202', animated: false },
  { id: '1102->1205', source: '1102', target: '1205', animated: false },
  { id: '1106->1203', source: '1106', target: '1203', animated: false },
  { id: '1104->1204', source: '1104', target: '1204', animated: false },
  // ciclo 2
  { id: '1201->2101', source: '1201', target: '2101', animated: false },
  { id: '1202->2102', source: '1202', target: '2102', animated: false },
  { id: '1205->2106', source: '1205', target: '2106', animated: false },
  { id: '1203->2105', source: '1203', target: '2105', animated: false },
  { id: '1204->2103', source: '1204', target: '2103', animated: false },
  // ciclo 3
  { id: '2101->2207', source: '2101', target: '2207', animated: false },
  { id: '2101->2201', source: '2101', target: '2201', animated: false },
  { id: '2101->3208', source: '2101', target: '3208', animated: false },
  { id: '2102->3105', source: '2102', target: '3105', animated: false },
  { id: '2106->2202', source: '2106', target: '2202', animated: false },
  { id: '2105->2204', source: '2105', target: '2204', animated: false },
  { id: '2105->2205', source: '2105', target: '2205', animated: false },
  { id: '2104->2206', source: '2104', target: '2206', animated: false },
  { id: '2103->2203', source: '2103', target: '2203', animated: false },
  { id: '2103->3203', source: '2103', target: '3203', animated: false },
  { id: '2103->3207', source: '2103', target: '3207', animated: false },
  // ciclo 4
  { id: '2207->4106', source: '2207', target: '4106', animated: false },
  { id: '2202->3101', source: '2202', target: '3101', animated: false },
  { id: '2204->3202', source: '2204', target: '3202', animated: false },
  { id: '2204->3206', source: '2204', target: '3206', animated: false },
  { id: '2205->3103', source: '2205', target: '3103', animated: false },
  { id: '2205->3201', source: '2205', target: '3201', animated: false },
  { id: '2206->3102', source: '2206', target: '3102', animated: false },
  { id: '2206->3106', source: '2206', target: '3106', animated: false },
  { id: '2203->3104', source: '2203', target: '3104', animated: false },
  // ciclo 5
  { id: '3102->3204', source: '3102', target: '3204', animated: false },
  { id: '3106->3205', source: '3106', target: '3205', animated: false },
  { id: '3104->4103', source: '3104', target: '4103', animated: false },
  // ciclo 6
  { id: '3201->4102', source: '3201', target: '4102', animated: false },
  { id: '3204->4104', source: '3204', target: '4104', animated: false },
  { id: '3205->4205', source: '3205', target: '4205', animated: false },
  { id: '3205->4202', source: '3205', target: '4202', animated: false },
  { id: '3205->4207', source: '3205', target: '4207', animated: false },
  { id: '3203->4105', source: '3203', target: '4105', animated: false },
  // ciclo 7
  { id: '4106->4208', source: '4106', target: '4208', animated: false },
  { id: '4102->4201', source: '4102', target: '4201', animated: false },
  { id: '4101->4203', source: '4101', target: '4203', animated: false },
  { id: '4101->5104', source: '4101', target: '5104', animated: false },
  { id: '4101->5204', source: '4101', target: '5204', animated: false },
  { id: '4104->4203', source: '4104', target: '4203', animated: false },
  { id: '4104->5106', source: '4104', target: '5106', animated: false },
  { id: '4103->4204', source: '4103', target: '4204', animated: false },
  { id: '4103->5105', source: '4103', target: '5105', animated: false },
  { id: '4103->5203', source: '4103', target: '5203', animated: false },
  { id: '4105->5102', source: '4105', target: '5102', animated: false },
  // ciclo 8
  { id: '4206->5107', source: '4206', target: '5107', animated: false },
  { id: '4202->5101', source: '4202', target: '5101', animated: false },
  { id: '4205->5105', source: '4205', target: '5105', animated: false },
  // ciclo 9
  { id: '5107->5205', source: '5107', target: '5205', animated: false },
  { id: '5103->5202', source: '5103', target: '5202', animated: false },
  { id: '5104->5202', source: '5104', target: '5202', animated: false },
  { id: '5102->5201', source: '5102', target: '5201', animated: false },
] as Edge[]
