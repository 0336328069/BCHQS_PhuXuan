export interface Personnel {
  id: string
  fullName: string
  rank: string
  phone?: string
  unit?: string
  status: 'Đang hoạt động' | 'Dự bị' | 'Không hoạt động'
}

export interface Unit {
  id: string
  name: string
  description: string
  estimatedPersonnel?: string
}

export const units: Unit[] = [
  {
    id: '1',
    name: 'Trung đội Dân quân Cơ động 1',
    description: 'Đơn vị trực sẵn sàng chiến đấu 24/7 tại trụ sở',
    estimatedPersonnel: '> 30 người'
  },
  {
    id: '2',
    name: 'Trung đội Dân quân Cơ động 2',
    description: 'Đơn vị trực sẵn sàng chiến đấu 24/7 tại trụ sở',
    estimatedPersonnel: '> 30 người'
  },
  {
    id: '3',
    name: 'Trung đội Dân quân Cơ động 3',
    description: 'Đơn vị trực sẵn sàng chiến đấu 24/7 tại trụ sở',
    estimatedPersonnel: '> 30 người'
  },
  {
    id: '4',
    name: 'Trung đội Dân quân Cơ động 4',
    description: 'Đơn vị trực sẵn sàng chiến đấu 24/7 tại trụ sở',
    estimatedPersonnel: '> 30 người'
  },
  {
    id: '5',
    name: 'Tiểu đội Dân quân tại chỗ',
    description: 'Phân bố theo các Tổ dân phố (TDP). Mỗi TDP có 1-2 Tổ dân quân (3-5 người/tổ)',
    estimatedPersonnel: '> 50 người'
  },
  {
    id: '6',
    name: 'Tổ Trinh sát',
    description: 'Đơn vị chuyên trách trinh sát, thu thập thông tin',
    estimatedPersonnel: '> 10 người'
  },
  {
    id: '7',
    name: 'Tổ Y tế',
    description: 'Đơn vị chuyên trách y tế, cứu thương trong chiến đấu và PCTT',
    estimatedPersonnel: '> 10 người'
  },
  {
    id: '8',
    name: 'Tổ Công binh',
    description: 'Đơn vị chuyên trách công binh, phá dỡ, xây dựng công sự',
    estimatedPersonnel: '> 10 người'
  },
  {
    id: '9',
    name: 'Tổ Phòng hóa',
    description: 'Đơn vị chuyên trách phòng hóa, phòng chống vũ khí hóa học',
    estimatedPersonnel: '> 10 người'
  },
  {
    id: '10',
    name: 'Tổ Thông tin',
    description: 'Đơn vị chuyên trách thông tin liên lạc',
    estimatedPersonnel: '> 10 người'
  }
]

export const personnel: Personnel[] = [
  {
    id: '1',
    fullName: 'Lê Văn Hào',
    rank: 'Chỉ huy trưởng',
    phone: '0234.3557.575',
    status: 'Đang hoạt động'
  },
  {
    id: '2',
    fullName: 'Nguyễn Văn A',
    rank: 'Phó chỉ huy trưởng',
    phone: '0912345678',
    status: 'Đang hoạt động'
  },
  {
    id: '3',
    fullName: 'Trần Văn B',
    rank: 'Phó chỉ huy trưởng',
    phone: '0987654321',
    status: 'Đang hoạt động'
  },
  {
    id: '4',
    fullName: 'Võ Lê Nhật',
    rank: 'Chính trị viên',
    phone: '',
    unit: 'Bí thư Đảng ủy Phường',
    status: 'Đang hoạt động'
  },
  {
    id: '5',
    fullName: 'Phạm Văn C',
    rank: 'Dân quân cơ động',
    phone: '0901234567',
    unit: 'Trung đội Dân quân Cơ động 1',
    status: 'Đang hoạt động'
  },
  {
    id: '6',
    fullName: 'Lê Thị D',
    rank: 'Dân quân cơ động',
    phone: '0911111111',
    unit: 'Trung đội Dân quân Cơ động 2',
    status: 'Đang hoạt động'
  },
  {
    id: '7',
    fullName: 'Hoàng Văn E',
    rank: 'Trinh sát',
    phone: '0922222222',
    unit: 'Tổ Trinh sát',
    status: 'Đang hoạt động'
  },
  {
    id: '8',
    fullName: 'Nguyễn Thị F',
    rank: 'Y tế',
    phone: '0933333333',
    unit: 'Tổ Y tế',
    status: 'Đang hoạt động'
  },
  {
    id: '9',
    fullName: 'Trần Văn G',
    rank: 'Công binh',
    phone: '0944444444',
    unit: 'Tổ Công binh',
    status: 'Đang hoạt động'
  },
  {
    id: '10',
    fullName: 'Lê Văn H',
    rank: 'Dân quân tại chỗ',
    phone: '0955555555',
    unit: 'Tiểu đội Dân quân tại chỗ',
    status: 'Đang hoạt động'
  }
]

export const organizationInfo = {
  totalPersonnel: '> 200',
  coreForce: '> 120',
  localForce: '> 50',
  specializedForce: '> 50',
  strategicLocation: 'Phường trọng điểm về Quốc phòng - An ninh',
  organizationLevel: 'Đại đội/Tiểu đoàn'
}
