# 억새풀_Server

서버 초보 두 감자의 솝커톤 박살내기🥔🥔

## 서비스 이름 및 한 줄 소개
**서비스명** : 억새풀  (어거지로 새롭게 풀이하는 짤의 제목)
**서비스 한 줄 소개** : 기억나니..❓ 그 때 우리…. 💫 🥺 함께해요 기억조작. 억새풀은 익명의 유저들이 올린 짤에 그에 맞는 댓글을 달아 새로운 기억을 만들어가는 서비스입니다. 설레는 첫사랑, 아픈 짝사랑, 아름다운 여행, 친구들과의 즐거운 학창시절…. 그 모든 원하는 기억을 직접 만들어보세요 🧙‍♀️🧙‍♂️

## 파트원 소개

|    이름    | 역할 |
| :--------: | :--: |
| **김기연** |  🥔   |
| **최영재** |  🥔   |

## Models

### models/categoty.ts

```typescript
import mongoose from "mongoose";
import { Icategory } from "../interfaces/Icategory";

const categorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  detailIdx: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Icategory & mongoose.Document>("Category", categorySchema);
```

### models/detailview.ts

```typescript
import mongoose from "mongoose";
import { Idetailview } from "../interfaces/Idetailview";

const detailviewSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  replyNum: {
    type: Number,
    required: true,
  },
  replyText: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  }
});

export default mongoose.model<Idetailview & mongoose.Document>("Detailview", detailviewSchema);
```

### models/reply.ts

```typescript
import mongoose from "mongoose";
import { Ireply } from "../interfaces/Ireply";

const replySchema = new mongoose.Schema({
  replyNum: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

export default mongoose.model<Ireply & mongoose.Document>("Reply", replySchema);
```

### models/like.ts

```typescript
import mongoose from "mongoose";
import { Ilike } from "../interfaces/Ilike";

const likeSchema = new mongoose.Schema({
  replyNum: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  }
});

export default mongoose.model<Ilike & mongoose.Document>("Like", likeSchema);
```



## API 명세서 (초안)

