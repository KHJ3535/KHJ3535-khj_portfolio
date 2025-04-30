import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @IsNotEmpty({ message: '작성자는 필수입력값입니다.' })
  @MinLength(2, { message: '작성자는 2글자 이상으로 작성해주세요' })
  @MaxLength(20, { message: '작성자는 20글자 이하로 작성해주세요' })
  author: string;

  @IsString()
  @IsNotEmpty({ message: '내용 필수입력값입니다.' })
  @MinLength(5, { message: '내용은 5글자 이상으로 작성해주세요' })
  @MaxLength(500, { message: '내용은 500글자 이상으로 작성해주세요' })
  content: string;
}
