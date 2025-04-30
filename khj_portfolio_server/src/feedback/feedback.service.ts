import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    const feedback = this.feedbackRepository.create(createFeedbackDto);

    await this.feedbackRepository.save(feedback);

    return {
      success: true,
      message: '피드백이 성공적으로 저장되었습니다.',
      statusCode: 201,
    };
  }

  async findAll(): Promise<Feedback[]> {
    return await this.feedbackRepository.find({
      order: {
        createdAT: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const feedback = await this.feedbackRepository.findOne({ where: { id } });
    if (!feedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
    return {
      success: true,
      message: '피드백이 성공적으로 조회됨',
      statusCode: 200,
      data: feedback,
    };
  }

  async remove(id: number) {
    const feedback = await this.feedbackRepository.findOne({ where: { id } });
    if (!feedback) {
      throw new NotFoundException(`Feedback with ID ${id} not found`);
    }
    await this.feedbackRepository.remove(feedback);
    return {
      success: true,
      message: '피드백이 성공적으로 삭제됨',
      statusCode: 200,
    };
  }
}
