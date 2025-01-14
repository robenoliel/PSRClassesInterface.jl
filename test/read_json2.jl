data = PSRI.initialize_study(
    PSRI.OpenInterface(),
    data_path = joinpath(".", "data", "caso1")
)

@test_throws ErrorException PSRI.mapped_vector(data, "PSRBattery", "Einic", Float64)
@test_throws ErrorException PSRI.mapped_vector(data, "PSRBattery", "Einic", Int32)
@test_throws ErrorException PSRI.get_parms(data, "PSRBattery", "Einic", Int32)
@test PSRI.get_parms(data, "PSRBattery", "Einic", Float64) == Float64[0, 0, 0]
@test PSRI.get_parms(data, "PSRBattery", "ChargeRamp", Float64) == Float64[-1, -1, -1]
@test PSRI.get_parms(data, "PSRBattery", "DischargeRamp", Float64) == Float64[-1, -1, -1]

PSRI.get_parms(data, "PSRBattery", "Einic", Float64)
PSRI.get_parms(data, "PSRBattery", "ChargeRamp", Float64)
PSRI.get_parms(data, "PSRBattery", "DischargeRamp", Float64)

status = PSRI.mapped_vector(data, "PSRThermalPlant", "Existing", Int32)
@test status == Int32[0, 0, 0, 0, 0]
capacity = PSRI.mapped_vector(data, "PSRThermalPlant", "PotInst", Float64)
@test capacity == [888.0, 0.1, 0.5, 1.0, 2.0]

# calling again is not valid
@test_throws ErrorException capfail = PSRI.mapped_vector(data, "PSRThermalPlant", "PotInst", Float64)

@test ter2sys = PSRI.get_map(data, "PSRThermalPlant", "PSRSystem") == Int32[1, 1, 1, 1, 1]
@test fcs2ter = PSRI.get_map(data, "PSRFuelConsumption", "PSRThermalPlant") == Int32[1, 2, 3, 4, 5]
@test bat2sys = PSRI.get_map(data, "PSRBattery", "PSRSystem") == Int32[1, 1, 1]
@test bat2bus = PSRI.get_map(data, "PSRBattery", "PSRBus") == Int32[125, 13, 60]

@test ger2ter = PSRI.get_map(data, "PSRGenerator", "PSRThermalPlant") == Int32[0, 2, 4, 5, 0, 3, 0, 0, 1]
@test ger2bat = PSRI.get_map(data, "PSRGenerator", "PSRGndPlant") == Int32[1, 0, 0, 0, 2, 0, 3, 4, 0]
@test ger2bus = PSRI.get_map(data, "PSRGenerator", "PSRBus") == Int32[20, 33, 39, 51, 71, 86, 93, 109, 117]

@test busFcur = PSRI.get_map(data, "PSRSerie", "PSRBus", relation_type = PSRI.RELATION_FROM) == Int32[1, 1, 1, 3, 3, 5, 7, 8, 8, 8, 9, 13, 13, 14, 14, 15, 15, 18, 18, 19, 21, 21, 23, 23, 25, 25, 26, 26, 27, 28, 29, 30, 31, 34, 35, 35, 36, 36, 38, 40, 40, 42, 42, 44, 44, 45, 47, 47, 49, 50, 51, 52, 53, 54, 54, 55, 57, 57, 58, 60, 60, 62, 63, 64, 65, 67, 67, 67, 68, 69, 70, 72, 72, 73, 74, 76, 76, 77, 78, 78, 80, 81, 81, 82, 84, 86, 87, 87, 89, 89, 91, 91, 93, 93, 95, 97, 98, 99, 100, 101, 101, 102, 103, 105, 105, 106, 108, 108, 109, 110, 110, 112, 113, 115, 116, 119, 120, 122, 9, 25, 120, 13, 18, 60, 97, 123, 127, 54, 118, 125]
@test busTcir = PSRI.get_map(data, "PSRSerie", "PSRBus", relation_type = PSRI.RELATION_TO) == Int32[2, 3, 7, 4, 5, 6, 8, 12, 9, 13, 14, 34, 18, 11, 10, 16, 17, 19, 21, 20, 22, 23, 24, 25, 26, 28, 27, 31, 33, 29, 30, 123, 32, 15, 36, 40, 37, 38, 39, 41, 42, 43, 44, 45, 47, 46, 48, 49, 50, 51, 118, 53, 54, 55, 57, 56, 58, 60, 59, 61, 62, 63, 64, 65, 66, 68, 72, 97, 69, 70, 71, 73, 76, 74, 75, 77, 86, 78, 79, 80, 81, 82, 84, 83, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 127, 102, 105, 103, 104, 106, 108, 107, 109, 125, 110, 111, 112, 113, 114, 35, 1, 52, 67, 101, 14, 26, 67, 119, 115, 120, 122, 124, 128, 94, 125, 126]

@test fcs2fue = PSRI.get_map(data, "PSRFuelConsumption", "PSRFuel") == Int32[1, 2, 3, 4, 5]
@test_throws ErrorException PSRI.get_map(data, "PSRThermalPlant", "PSRFuel")
@test ter2fue = PSRI.get_vector_map(data, "PSRThermalPlant", "PSRFuel") == Vector{Int32}[[1], [2], [3], [4], [5]]

#=
    reverse relations
=#

# for each thermal, return its generator
@test PSRI.get_reverse_map(data, "PSRGenerator", "PSRThermalPlant") == Int32[9, 2, 6, 3, 4]

# same for gnd
@test PSRI.get_reverse_map(data, "PSRGenerator", "PSRGndPlant") == Int32[1, 5, 7, 8]

# for each bus, return all generators there
@test PSRI.get_reverse_vector_map(data, "PSRGenerator", "PSRBus", original_relation_type = PSRI.RELATION_1_TO_1) == Vector{Int32}[[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [], [], [], [], [], [], [], [], [], [], [], [2], [], [], [], [], [], [3], [], [], [], [], [], [], [], [], [], [], [], [4], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [5], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [6], [], [], [], [], [], [], [7], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [8], [], [], [], [], [], [], [], [9], [], [], [], [], [], [], [], [], [], [], [], []]
