import mongoose from 'mongoose'


const customTestSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    contentType: {
      type: String,
      enum: ['text', 'url', 'topic', 'document', 'video', 'audio'],
      required: true
    },
    content: {
      text: { 
        type: String 
    },
      url: { 
        type: String 
    },
      topic: { 
        type: String 
    },
      documentPath: { 
        type: String
     },
      video: {
        source: { 
            type: String
         },
        url: {
             type: String 
            }
      },
      audio: {
        source: { 
            type: String 
        },
        url: { 
            type: String }
      }
    },
    extractedText: { 
        type: String 
    },
    settings: {
      questionTypes: { 
        type: [String], 
        default: [] },
      questionCount: { 
        type: Number, 
        default: 10 
    },
      includeVisuals: { 
        type: String, 
        enum: ['None', 'Basic', 'Detailed'], 
        default: 'None'
     }
    }
  }, { timestamps: true });
  
const CustomTest = mongoose.model('CustomTest', customTestSchema);

export default CustomTest;