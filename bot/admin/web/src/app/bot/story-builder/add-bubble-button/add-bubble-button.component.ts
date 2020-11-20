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
import {BotInteraction} from '../model/BotInteraction';
import {UserInteraction} from '../model/UserInteraction';

@Component({
  selector: 'tock-add-bubble-button',
  templateUrl: './add-bubble-button.component.html',
  styleUrls: ['./add-bubble-button.component.css']
})
export class AddBubbleButtonComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  action: (botInteraction: BotInteraction | UserInteraction, sentence: string) => {};
  @Input()
  parentInteraction: BotInteraction | UserInteraction;
  showInputLabel: boolean;

  ngOnInit(): void {
    this.showInputLabel = false;
  }

  save(sentence: string) {
    this.action(this.parentInteraction, sentence);
  }
}
