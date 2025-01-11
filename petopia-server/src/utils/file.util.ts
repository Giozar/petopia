import fs from 'fs'
import path from 'path'

interface FileRepositoryOptions {
  baseDir: string
  fileName: string
  initialData?: any[]
}

export class FileRepositoryUtils {
  private baseDir: string
  private fileName: string
  private filePath: string
  private initialData: any[]

  constructor(options: FileRepositoryOptions) {
    this.baseDir = options.baseDir
    this.fileName = options.fileName
    this.initialData = options.initialData || []
    this.filePath = path.join(this.baseDir, this.fileName)
    this.ensureFileExists()
  }

  private ensureFileExists(): void {
    if (!fs.existsSync(this.baseDir)) {
      fs.mkdirSync(this.baseDir, { recursive: true })
    }
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(
        this.filePath,
        JSON.stringify(this.initialData, null, 2),
        'utf-8'
      )
    }
  }

  public readData<T>(): T[] {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8')
    return JSON.parse(fileContent) || []
  }

  public writeData<T>(data: T[]): void {
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(data, null, 2),
      'utf-8'
    )
  }
}
