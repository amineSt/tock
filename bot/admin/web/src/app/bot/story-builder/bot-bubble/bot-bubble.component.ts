/*
 * Copyright (C) 2017/2020 e-voyageurs technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input, OnInit} from '@angular/core';
import {UserInteraction} from '../model/UserInteraction';
import {BotInteraction} from '../model/BotInteraction';

@Component({
  selector: 'tock-bot-bubble',
  templateUrl: './bot-bubble.component.html',
  styleUrls: ['./bot-bubble.component.css']
})
export class BotBubbleComponent implements OnInit {

  @Input()
  botInteraction: BotInteraction;

  @Input()
  actions: UserInteraction[];

  save: (sentence: string) => void = sentence => {
    this.botInteraction.entries[0].content = sentence;
  }

  ngOnInit(): void {
  }
}
