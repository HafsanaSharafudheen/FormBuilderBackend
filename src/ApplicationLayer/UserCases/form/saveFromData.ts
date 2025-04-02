import { CanvasDataRepository } from "../../../Frameworks/DataBase/Repositories/CanvasDataRepository ";

export class CanvasDataUseCase {
    private canvasDataRepository: CanvasDataRepository;

    constructor() {
        this.canvasDataRepository = new CanvasDataRepository();
    }

    // Use case for saving the canvas data
    public async storeCanvasData(data: any): Promise<any> {
        try {
            return await this.canvasDataRepository.saveCanvasData(data);
        } catch (error) {
            throw new Error('Error storing canvas data');
        }
    }
}
