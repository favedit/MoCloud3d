module sk.common.reflect {
   //==========================================================
   // <T>对象类的描述信息。</T>
   //
   // @tool
   // @author maocy
   // @version 141226
   //==========================================================
   export class FClass {
      //..........................................................
      // @attribute 本类是安全对象，禁止内存管理器自动释放
      protected __disposed = true;
      // @attribute
      protected _abstract = false;
      protected _annotations = new Object();
      protected _attributes = new Object();
      protected _styles = new Array();
      // @attribute
      protected _base = null;
      protected _clazz = null;
      protected _parent = null;
      // @attribute
      protected _instance = null;
      protected _pool = new sk.common.lang.FMemoryPool();
      // @attribute
      protected _name = null;

      //==========================================================
      // <T>构造处理。</T>
      //
      // @method
      //==========================================================
      constructor() {
      }

      //==========================================================
      // <T>向当前类对象注册一个属性。</T>
      //
      // @method
      // @param annotation:AAnnotation 描述对象
      //==========================================================
      public register(annotation) {
         var o = this;
         annotation._clazz = o;
         // 检查类型和名称的合法性
         var annotationCd = annotation.annotationCd();
         var ordered = annotation.isOrdered();
         var name = annotation.name();
         var code = annotation.code();
         if (!annotationCd || !code) {
            throw new FError(o, "Unknown annotation. (class={1}, annotation={2}, name={3}, code={4})", RClass.dump(o), annotation, name, code);
         }
         // 获得一个Annotation的类型容器
         var annotations = o._annotations[annotationCd];
         if (!annotations) {
            if (ordered) {
               annotations = new sk.common.lang.FObjects();
            } else {
               annotations = new Object();
            }
            o._annotations[annotationCd] = annotations;
         }
         // 检查重复
         if (!annotation._duplicate) {
            var duplicate = false;
            if (ordered) {
               var acount = annotations.count();
               for (var i = 0; i < acount; i++) {
                  var afind = annotations.at(i);
                  if (afind.code() == code) {
                     duplicate = true;
                     break;
                  }
               }
            } else {
               if (annotations[code]) {
                  duplicate = true;
               }
            }
            if (duplicate) {
               throw new FError(o, "Duplicate annotation. (class={1}, annotation={2}, name={3}, code={4}, value={5})", RClass.dump(o), annotation, name, code, annotation.toString());
            }
         }
         // 设置内容
         if (ordered) {
            annotations.push(annotation);
         } else {
            annotations[code] = annotation;
         }
         o._attributes[name] = annotation;
      }

      //==========================================================
      // <T>当前类接收其他类所有的描述信息。</T>
      //
      // @method
      // @param clazz:TClass 类对象
      //==========================================================
      public assign(clazz) {
         var o = this;
         //..........................................................
         // 复制描述器
         for (var annotationName in clazz._annotations) {
            var clazzAnnotations = clazz._annotations[annotationName];
            // 在自己当前对象内查找描述的类型容器
            var annotations = o._annotations[annotationName];
            if (!annotations) {
               annotations = o._annotations[annotationName] = new clazzAnnotations.constructor();
            }
            // 复制指定对象内的类型到自己对象内
            if (clazzAnnotations.constructor == sk.common.lang.FObjects) {
               annotations.append(clazzAnnotations);
            } else {
               for (var name in clazzAnnotations) {
                  var annotation = clazzAnnotations[name];
                  // 检查重复
                  if (!annotation.isDuplicate()) {
                     if (annotations[name]) {
                        throw new FError(o, "Duplicate annotation. (annotation={1}, {2}.{3}={4}.{5}, source={6})", annotationName, o._name, name, clazz.name, name, annotation.toString());
                     }
                  }
                  // 复制描述器
                  if (annotation._inherit) {
                     annotations[name] = annotation;
                  }
               }
            }
         }
         //..........................................................
         // 复制属性集合
         for (var name in clazz._attributes) {
            var attribute = clazz._attributes[name];
            if (attribute.construct != Function) {
               o._attributes[name] = clazz._attributes[name];
            }
         }
      }

      //==========================================================
      // <T>获得一个描述类型的描述对象集合。</T>
      //
      // @method
      // @param annotationCd:EAnnotation 描述类型
      // @return Object 描述对象集合
      //==========================================================
      public annotations(annotationCd) {
         var o = this;
         var annotation = o._annotations[annotationCd];
         if (!annotation) {
            sk.common.lang.RLogger.fatal(o, null, "Can't find annotations. (annotation_cd={1}, class={2})", annotationCd, o._name);
         }
         return annotation;
      }

      //==========================================================
      // <T>获得一个描述类型下的一个描述对象。</T>
      //
      // @method
      // @param annotationCd:EAnnotation 描述类型
      // @param name:String 名称
      // @return Object 描述对象
      //==========================================================
      public annotation(annotationCd, name) {
         var o = this;
         var annotation = null;
         var annotations = o._annotations[annotationCd];
         if (annotations) {
            annotation = annotations[name];
         }
         if (!annotation) {
            sk.common.lang.RLogger.fatal(o, null, "Can't find annotation. (annotation_cd={1}, name={2}, class={3})", annotationCd, name, o._name);
         }
         return annotation;
      }

      //==========================================================
      // <T>根据名称查找描述器。</T>
      //
      // @method
      // @param p:name:String 名称
      // @return Object 描述对象
      //==========================================================
      public annotationFind(p) {
         var o = this;
         for (var name in o._annotations) {
            var annotations = o._annotations[name];
            if (annotations) {
               var annotation = annotations[p];
               if (annotation != null) {
                  if (annotation.constructor != Function) {
                     return annotation;
                  }
               }
            }
         }
         return null;
      }

      //==========================================================
      // <T>根据属性查找描述器。</T>
      //
      // @method
      // @param p:name:String 名称
      // @return Object 描述对象
      //==========================================================
      public attributeFind(p) {
         var attribute = this._attributes[p];
         if (attribute) {
            if (attribute.constructor != Function) {
               return attribute;
            }
         }
         return null;
      }

      //==========================================================
      // <T>获得一个类关联的样式描述。</T>
      //
      // @method
      // @param name:String 名称
      // @return String 样式名称
      //==========================================================
      public style(name) {
         var o = this;
         // 从缓冲中获得样式名称，如果存在，则直接返回
         var styles = o._styles;
         if (styles[name]) {
            return styles[name];
         }
         // 递规找到自己或父类上注册的名称
         var annotation = null;
         var find = o;
         while (find) {
            var annotations = find._annotations[EAnnotation.Style];
            if (annotations) {
               annotation = annotations[name];
               if (annotation) {
                  break;
               }
            }
            find = find._parent;
         }
         // 如果未注册，则告诉用户错误
         if (!annotation) {
            sk.common.lang.RLogger.fatal(o, null, "No register style annotation. (class={1}, name={2})", o._name, o._name + '_' + name);
         }
         // 生成样式名称
         var styleName = find._name + '_' + annotation.style();
         styles[name] = styleName;
         return styleName;
      }

      //==========================================================
      // <T>类对象构建处理。</T>
      //
      // @method
      //==========================================================
      public build() {
         var o = this;
         var instance = o._instance;
         //..........................................................
         // 检查类中是否存在虚函数
         for (var name in instance) {
            var value = instance[name];
            if (value != null) {
               if ((value.constructor == Function) && value.__virtual) {
                  o._abstract = true;
                  break;
               }
            }
         }
         //..........................................................
         // 初始化属性对象
         var properties = o._annotations[EAnnotation.Property];
         if (properties) {
            for (var name in properties) {
               var property = properties[name];
               property.build(instance);
            }
         }
         //..........................................................
         // 生成自动函数
         var sources = o._annotations[EAnnotation.Source];
         if (sources) {
            for (var name in sources) {
               var source = sources[name];
               source.build(o, instance);
            }
         }
      }

      //==========================================================
      // <T>创建当前类对象的一个实例。</T>
      //
      // @method
      // @param c:class:TClass 类对象
      // @return Object 对象实例
      //==========================================================
      public newInstance() {
         var o = this;
         // 检测要实例化的类是否为虚类
         var instance = null;
         // 判断是否为虚类
         if (o._abstract) {
            var message = new sk.common.lang.FString();
            for (var name in o._instance) {
               var value = o._instance[name];
               if (RMethod.isVirtual(value)) {
                  if (!message.isEmpty()) {
                     message.append(',');
                  }
                  message.append(value._name);
               }
            }
            throw new FError(o, "Abstract Class can't be create.(name={1})\n[{2}]", o._name, message);
         }
         // 同一个类的实例中全部共享base对象，中间不能存私有树据。
         var template = o._instance;
         if (!template) {
            return sk.common.lang.RLogger.fatal(o, null, "Class instance is empty. (name={1})", o._name);
         }
         instance = new template.constructor();
         for (var name in template) {
            var value = template[name];
            if (value != null) {
               // 特殊属性处理
               if ((name == '__base') || (name == '__inherits')) {
                  instance[name] = template[name];
                  continue;
               }
               // 递归创建所有子对象
               if (!RClass.isBase(value)) {
                  value = sk.common.lang.RObject.clone(value);
               }
            }
            instance[name] = value;
         }
         // 初始化对象
         instance.__class = o;
         if (instance.construct) {
            instance.construct();
         }
         return instance;
      }

      //==========================================================
      // <T>收集一个实例。</T>
      //
      // @method
      // @return FObject 实例
      //==========================================================
      public alloc() {
         return this._pool.alloc();
      }

      //==========================================================
      // <T>释放一个实例。</T>
      //
      // @method
      // @param instance:FObject 实例
      //==========================================================
      public free(instance) {
         this._pool.free(instance);
      }
   }
}
